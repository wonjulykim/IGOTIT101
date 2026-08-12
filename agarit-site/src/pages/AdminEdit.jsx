import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getLesson } from '../data/chapters'
import { getLessonContent } from '../data/content'
import { getSession, getOverride, saveOverride, revertOverride, uploadImage } from '../utils/adminApi'
import './AdminEdit.css'

const BLOCK_LABELS = {
  heading: '제목',
  p: '본문',
  note: '노트',
  image: '이미지',
  video: '동영상',
  callout: '콜아웃',
  example: '예문',
  table: '표',
  'sentence-diagram': '문장 다이어그램',
  'preposition-diagram-row': '전치사 다이어그램',
  'word-order': '어순',
  timeline: '타임라인',
  transform: '변형',
  'icon-row': '아이콘 목록',
}

const SIMPLE_TYPES = ['heading', 'p', 'note', 'image', 'video']

function makeId() {
  return crypto.randomUUID()
}

function defaultBlock(type) {
  const base = { __id: makeId() }
  switch (type) {
    case 'heading':
      return { ...base, type: 'heading', text: '' }
    case 'p':
      return { ...base, type: 'p', text: '' }
    case 'note':
      return { ...base, type: 'note', text: '' }
    case 'image':
      return { ...base, type: 'image', src: '', alt: '', caption: '' }
    case 'video':
      return { ...base, type: 'video', youtubeId: '', src: '', caption: '' }
    default:
      return { ...base, type }
  }
}

function withIds(list) {
  return (list || []).map((b) => ({ ...b, __id: makeId() }))
}

function stripId(block) {
  const { __id, ...rest } = block
  return rest
}

function extractYoutubeId(value) {
  if (!value) return ''
  const match = value.match(/(?:youtu\.be\/|v=|embed\/)([a-zA-Z0-9_-]{6,})/)
  return match ? match[1] : value.trim()
}

export default function AdminEdit() {
  const { chapterId, lessonId } = useParams()
  const navigate = useNavigate()
  const info = getLesson(chapterId, lessonId)

  const [checking, setChecking] = useState(true)
  const [title, setTitle] = useState('')
  const [blocks, setBlocks] = useState([])
  const [hasOverride, setHasOverride] = useState(false)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    getSession().then((data) => {
      if (!data?.loggedIn) {
        navigate(`/admin/login?next=${encodeURIComponent(`/admin/edit/${chapterId}/${lessonId}`)}`, { replace: true })
        return
      }
      setChecking(false)
    })
  }, [chapterId, lessonId, navigate])

  useEffect(() => {
    if (checking || !info) return
    loadContent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checking, chapterId, lessonId])

  async function loadContent() {
    setError('')
    try {
      const data = await getOverride(chapterId, lessonId)
      if (data?.override) {
        setTitle(data.override.title || info.lesson.title)
        setBlocks(withIds(data.override.blocks))
        setHasOverride(true)
      } else {
        const content = getLessonContent(chapterId, lessonId)
        setTitle(content?.title || info.lesson.title)
        setBlocks(withIds(content?.blocks))
        setHasOverride(false)
      }
    } catch (err) {
      setError(err.message)
    }
  }

  if (!info) return <p>레슨을 찾을 수 없습니다.</p>
  if (checking) return <p>확인 중...</p>

  function updateBlock(id, patch) {
    setBlocks((prev) => prev.map((b) => (b.__id === id ? { ...b, ...patch } : b)))
  }
  function moveBlock(id, dir) {
    setBlocks((prev) => {
      const index = prev.findIndex((b) => b.__id === id)
      const target = index + dir
      if (index === -1 || target < 0 || target >= prev.length) return prev
      const next = [...prev]
      ;[next[index], next[target]] = [next[target], next[index]]
      return next
    })
  }
  function deleteBlock(id) {
    setBlocks((prev) => prev.filter((b) => b.__id !== id))
  }
  function addBlock(type) {
    setBlocks((prev) => [...prev, defaultBlock(type)])
  }

  async function handleSave() {
    setSaving(true)
    setError('')
    setMessage('')
    try {
      await saveOverride(chapterId, lessonId, { title, blocks: blocks.map(stripId) })
      setHasOverride(true)
      setMessage('저장되었습니다.')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  async function handleRevert() {
    if (!window.confirm('저장된 수정 내용을 삭제하고 원본으로 되돌립니다. 계속할까요?')) return
    setSaving(true)
    setError('')
    setMessage('')
    try {
      await revertOverride(chapterId, lessonId)
      await loadContent()
      setMessage('원본으로 되돌렸습니다.')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="admin-edit-page">
      <div className="admin-edit-top">
        <div>
          <div className="admin-edit-breadcrumb">{info.chapter.num}장 {info.chapter.title}</div>
          <input className="admin-edit-title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="admin-edit-actions">
          <button className="btn-secondary" onClick={() => navigate(`/chapter/${chapterId}/lesson/${lessonId}`)}>
            미리보기로 이동
          </button>
          {hasOverride && (
            <button className="btn-secondary" onClick={handleRevert} disabled={saving}>
              원본으로 되돌리기
            </button>
          )}
          <button className="btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? '저장 중...' : '저장'}
          </button>
        </div>
      </div>

      {message && <p className="admin-edit-message">{message}</p>}
      {error && <p className="admin-edit-error">{error}</p>}

      <div className="admin-edit-blocks">
        {blocks.map((block) => (
          <BlockEditor
            key={block.__id}
            block={block}
            onChange={(patch) => updateBlock(block.__id, patch)}
            onDelete={() => deleteBlock(block.__id)}
            onMoveUp={() => moveBlock(block.__id, -1)}
            onMoveDown={() => moveBlock(block.__id, 1)}
          />
        ))}
        {blocks.length === 0 && <p className="admin-edit-empty">아직 블록이 없습니다. 아래에서 추가해보세요.</p>}
      </div>

      <div className="admin-edit-add-row">
        <span>블록 추가:</span>
        {SIMPLE_TYPES.map((type) => (
          <button key={type} className="btn-secondary" onClick={() => addBlock(type)}>
            + {BLOCK_LABELS[type]}
          </button>
        ))}
      </div>
    </div>
  )
}

function BlockEditor({ block, onChange, onDelete, onMoveUp, onMoveDown }) {
  const label = BLOCK_LABELS[block.type] || block.type

  return (
    <div className="admin-block-card">
      <div className="admin-block-head">
        <span className="admin-block-type">{label}</span>
        <div className="admin-block-tools">
          <button type="button" onClick={onMoveUp} title="위로">↑</button>
          <button type="button" onClick={onMoveDown} title="아래로">↓</button>
          <button type="button" onClick={onDelete} title="삭제" className="admin-block-delete">삭제</button>
        </div>
      </div>
      <BlockBody block={block} onChange={onChange} />
    </div>
  )
}

function BlockBody({ block, onChange }) {
  switch (block.type) {
    case 'heading':
      return (
        <input
          value={block.text || ''}
          onChange={(e) => onChange({ text: e.target.value })}
          placeholder="제목 텍스트"
        />
      )
    case 'p':
    case 'note':
      return (
        <textarea
          value={block.text || ''}
          onChange={(e) => onChange({ text: e.target.value })}
          placeholder="내용을 입력하세요"
          rows={4}
        />
      )
    case 'image':
      return <ImageBlockBody block={block} onChange={onChange} />
    case 'video':
      return <VideoBlockBody block={block} onChange={onChange} />
    default:
      return <AdvancedBlockBody block={block} onChange={onChange} />
  }
}

function ImageBlockBody({ block, onChange }) {
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  async function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setUploadError('')
    try {
      const { url } = await uploadImage(file)
      onChange({ src: url })
    } catch (err) {
      setUploadError(err.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="admin-image-body">
      {block.src && <img className="admin-image-preview" src={block.src} alt={block.alt || ''} />}
      <div className="admin-image-controls">
        <label className="btn-secondary admin-file-label">
          {uploading ? '업로드 중...' : '이미지 선택'}
          <input type="file" accept="image/*" onChange={handleFile} disabled={uploading} hidden />
        </label>
        <input
          value={block.src || ''}
          onChange={(e) => onChange({ src: e.target.value })}
          placeholder="이미지 URL (직접 붙여넣기도 가능)"
        />
      </div>
      {uploadError && <p className="admin-edit-error">{uploadError}</p>}
      <input
        value={block.caption || ''}
        onChange={(e) => onChange({ caption: e.target.value })}
        placeholder="캡션 (선택)"
      />
      <input
        value={block.alt || ''}
        onChange={(e) => onChange({ alt: e.target.value })}
        placeholder="대체 텍스트 (선택, 스크린리더용)"
      />
    </div>
  )
}

function VideoBlockBody({ block, onChange }) {
  return (
    <div className="admin-video-body">
      <input
        value={block.youtubeId || ''}
        onChange={(e) => onChange({ youtubeId: extractYoutubeId(e.target.value), src: '' })}
        placeholder="YouTube 링크 또는 ID"
      />
      <input
        value={block.src || ''}
        onChange={(e) => onChange({ src: e.target.value, youtubeId: '' })}
        placeholder="또는 외부 동영상 URL (mp4 등)"
      />
      <input
        value={block.caption || ''}
        onChange={(e) => onChange({ caption: e.target.value })}
        placeholder="캡션 (선택)"
      />
    </div>
  )
}

function AdvancedBlockBody({ block, onChange }) {
  const [text, setText] = useState(() => JSON.stringify(stripId(block), null, 2))
  const [parseError, setParseError] = useState('')

  function handleBlur() {
    try {
      const parsed = JSON.parse(text)
      setParseError('')
      onChange(parsed)
    } catch {
      setParseError('JSON 형식이 올바르지 않습니다. 수정 내용이 반영되지 않았습니다.')
    }
  }

  return (
    <div className="admin-advanced-body">
      <p className="admin-advanced-hint">이 블록 유형은 전용 편집 화면이 없어 JSON으로 직접 수정합니다.</p>
      <textarea value={text} onChange={(e) => setText(e.target.value)} onBlur={handleBlur} rows={8} />
      {parseError && <p className="admin-edit-error">{parseError}</p>}
    </div>
  )
}

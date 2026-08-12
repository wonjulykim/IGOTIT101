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
  'word-order': '어순 비교',
  timeline: '타임라인',
  transform: '변형',
  'icon-row': '아이콘 목록',
}

const ADD_TYPES = [
  'heading', 'p', 'note', 'image', 'video',
  'callout', 'example', 'table', 'icon-row',
  'sentence-diagram', 'preposition-diagram-row', 'word-order', 'timeline', 'transform',
]

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
    case 'callout':
      return { ...base, type: 'callout', title: '', items: [''] }
    case 'example':
      return { ...base, type: 'example', items: [{ en: '', ko: '', note: '' }] }
    case 'table':
      return { ...base, type: 'table', caption: '', headers: ['', ''], rows: [['', '']] }
    case 'icon-row':
      return { ...base, type: 'icon-row', caption: '', items: [{ icon: '✨', label: '', sub: '' }] }
    case 'sentence-diagram':
      return { ...base, type: 'sentence-diagram', label: '', parts: [{ tag: 'S', text: '' }], translation: '' }
    case 'preposition-diagram-row':
      return { ...base, type: 'preposition-diagram-row', items: [{ prep: '', caption: '' }] }
    case 'word-order':
      return { ...base, type: 'word-order', korean: [{ text: '', tag: '' }], english: [{ text: '', tag: '' }] }
    case 'timeline':
      return { ...base, type: 'timeline', label: '', now: 100, points: [{ at: 50, text: '' }], range: null, translation: '' }
    case 'transform':
      return { ...base, type: 'transform', from: [{ label: '', text: '' }], to: { label: '', text: '' }, note: '' }
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
        {ADD_TYPES.map((type) => (
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
    case 'callout':
      return <CalloutBlockBody block={block} onChange={onChange} />
    case 'example':
      return <ExampleBlockBody block={block} onChange={onChange} />
    case 'table':
      return <TableBlockBody block={block} onChange={onChange} />
    case 'icon-row':
      return <IconRowBlockBody block={block} onChange={onChange} />
    case 'sentence-diagram':
      return <SentenceDiagramBlockBody block={block} onChange={onChange} />
    case 'preposition-diagram-row':
      return <PrepositionRowBlockBody block={block} onChange={onChange} />
    case 'word-order':
      return <WordOrderBlockBody block={block} onChange={onChange} />
    case 'timeline':
      return <TimelineBlockBody block={block} onChange={onChange} />
    case 'transform':
      return <TransformBlockBody block={block} onChange={onChange} />
    default:
      return <AdvancedBlockBody block={block} onChange={onChange} />
  }
}

// ---- 반복 목록(리스트) 편집을 위한 공용 헬퍼 ----

function useListHelpers(list, onChangeList) {
  function update(i, patch) {
    onChangeList(list.map((it, idx) => (idx === i ? { ...it, ...patch } : it)))
  }
  function remove(i) {
    onChangeList(list.filter((_, idx) => idx !== i))
  }
  function add(item) {
    onChangeList([...list, item])
  }
  function move(i, dir) {
    const target = i + dir
    if (target < 0 || target >= list.length) return
    const next = [...list]
    ;[next[i], next[target]] = [next[target], next[i]]
    onChangeList(next)
  }
  return { update, remove, add, move }
}

function ListRowTools({ onMoveUp, onMoveDown, onDelete }) {
  return (
    <div className="admin-list-row-tools">
      <button type="button" onClick={onMoveUp} title="위로">↑</button>
      <button type="button" onClick={onMoveDown} title="아래로">↓</button>
      <button type="button" onClick={onDelete} title="삭제" className="admin-block-delete">✕</button>
    </div>
  )
}

// ---- 블록별 전용 편집 UI ----

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

function CalloutBlockBody({ block, onChange }) {
  const items = block.items || []
  function setItem(i, value) {
    onChange({ items: items.map((it, idx) => (idx === i ? value : it)) })
  }
  function removeItem(i) {
    onChange({ items: items.filter((_, idx) => idx !== i) })
  }
  function move(i, dir) {
    const target = i + dir
    if (target < 0 || target >= items.length) return
    const next = [...items]
    ;[next[i], next[target]] = [next[target], next[i]]
    onChange({ items: next })
  }
  return (
    <div className="admin-callout-body">
      <input value={block.title || ''} onChange={(e) => onChange({ title: e.target.value })} placeholder="콜아웃 제목" />
      <div className="admin-list-editor">
        {items.map((it, i) => (
          <div className="admin-list-row" key={i}>
            <div className="admin-list-row-fields">
              <input value={it} onChange={(e) => setItem(i, e.target.value)} placeholder={`항목 ${i + 1}`} />
            </div>
            <ListRowTools onMoveUp={() => move(i, -1)} onMoveDown={() => move(i, 1)} onDelete={() => removeItem(i)} />
          </div>
        ))}
        <button type="button" className="btn-secondary admin-list-add" onClick={() => onChange({ items: [...items, ''] })}>
          + 항목 추가
        </button>
      </div>
    </div>
  )
}

function ExampleBlockBody({ block, onChange }) {
  const items = block.items || []
  const { update, remove, move } = useListHelpers(items, (next) => onChange({ items: next }))
  return (
    <div className="admin-list-editor">
      {items.map((it, i) => (
        <div className="admin-list-row" key={i}>
          <div className="admin-list-row-fields">
            <input value={it.en || ''} onChange={(e) => update(i, { en: e.target.value })} placeholder="영어 문장" />
            <input value={it.ko || ''} onChange={(e) => update(i, { ko: e.target.value })} placeholder="한글 해석" />
            <input value={it.note || ''} onChange={(e) => update(i, { note: e.target.value })} placeholder="설명 (선택)" />
          </div>
          <ListRowTools onMoveUp={() => move(i, -1)} onMoveDown={() => move(i, 1)} onDelete={() => remove(i)} />
        </div>
      ))}
      <button
        type="button"
        className="btn-secondary admin-list-add"
        onClick={() => onChange({ items: [...items, { en: '', ko: '', note: '' }] })}
      >
        + 예문 추가
      </button>
    </div>
  )
}

function IconRowBlockBody({ block, onChange }) {
  const items = block.items || []
  const { update, remove, move } = useListHelpers(items, (next) => onChange({ items: next }))
  return (
    <div>
      <input
        value={block.caption || ''}
        onChange={(e) => onChange({ caption: e.target.value })}
        placeholder="캡션 (선택)"
      />
      <div className="admin-list-editor">
        {items.map((it, i) => (
          <div className="admin-list-row" key={i}>
            <div className="admin-list-row-fields admin-list-row-fields-icon">
              <input className="admin-icon-input" value={it.icon || ''} onChange={(e) => update(i, { icon: e.target.value })} placeholder="🔤" />
              <input value={it.label || ''} onChange={(e) => update(i, { label: e.target.value })} placeholder="라벨" />
              <input value={it.sub || ''} onChange={(e) => update(i, { sub: e.target.value })} placeholder="부제 (선택)" />
            </div>
            <ListRowTools onMoveUp={() => move(i, -1)} onMoveDown={() => move(i, 1)} onDelete={() => remove(i)} />
          </div>
        ))}
        <button
          type="button"
          className="btn-secondary admin-list-add"
          onClick={() => onChange({ items: [...items, { icon: '✨', label: '', sub: '' }] })}
        >
          + 아이콘 추가
        </button>
      </div>
    </div>
  )
}

function PrepositionRowBlockBody({ block, onChange }) {
  const items = block.items || []
  const { update, remove, move } = useListHelpers(items, (next) => onChange({ items: next }))
  return (
    <div className="admin-list-editor">
      {items.map((it, i) => (
        <div className="admin-list-row" key={i}>
          <div className="admin-list-row-fields">
            <input value={it.prep || ''} onChange={(e) => update(i, { prep: e.target.value })} placeholder="전치사 (예: on, under)" />
            <input value={it.caption || ''} onChange={(e) => update(i, { caption: e.target.value })} placeholder="설명 (선택)" />
          </div>
          <ListRowTools onMoveUp={() => move(i, -1)} onMoveDown={() => move(i, 1)} onDelete={() => remove(i)} />
        </div>
      ))}
      <button
        type="button"
        className="btn-secondary admin-list-add"
        onClick={() => onChange({ items: [...items, { prep: '', caption: '' }] })}
      >
        + 전치사 추가
      </button>
    </div>
  )
}

function SentenceDiagramBlockBody({ block, onChange }) {
  const parts = block.parts || []
  const { update, remove, move } = useListHelpers(parts, (next) => onChange({ parts: next }))
  return (
    <div>
      <input value={block.label || ''} onChange={(e) => onChange({ label: e.target.value })} placeholder="라벨 (선택)" />
      <div className="admin-list-editor">
        {parts.map((p, i) => (
          <div className="admin-list-row" key={i}>
            <div className="admin-list-row-fields admin-list-row-fields-icon">
              <input className="admin-icon-input" value={p.tag || ''} onChange={(e) => update(i, { tag: e.target.value })} placeholder="S/V/O/C" />
              <input value={p.text || ''} onChange={(e) => update(i, { text: e.target.value })} placeholder="단어/구" />
            </div>
            <ListRowTools onMoveUp={() => move(i, -1)} onMoveDown={() => move(i, 1)} onDelete={() => remove(i)} />
          </div>
        ))}
        <button
          type="button"
          className="btn-secondary admin-list-add"
          onClick={() => onChange({ parts: [...parts, { tag: 'S', text: '' }] })}
        >
          + 조각 추가
        </button>
      </div>
      <input value={block.translation || ''} onChange={(e) => onChange({ translation: e.target.value })} placeholder="번역 (선택)" />
    </div>
  )
}

function WordOrderBlockBody({ block, onChange }) {
  const korean = block.korean || []
  const english = block.english || []
  const kr = useListHelpers(korean, (next) => onChange({ korean: next }))
  const en = useListHelpers(english, (next) => onChange({ english: next }))
  return (
    <div className="admin-word-order-body">
      <div className="admin-word-order-col">
        <div className="admin-sublabel">🇰🇷 한국어</div>
        <div className="admin-list-editor">
          {korean.map((it, i) => (
            <div className="admin-list-row" key={i}>
              <div className="admin-list-row-fields admin-list-row-fields-icon">
                <input value={it.text || ''} onChange={(e) => kr.update(i, { text: e.target.value })} placeholder="단어" />
                <input className="admin-icon-input" value={it.tag || ''} onChange={(e) => kr.update(i, { tag: e.target.value })} placeholder="태그" />
              </div>
              <ListRowTools onMoveUp={() => kr.move(i, -1)} onMoveDown={() => kr.move(i, 1)} onDelete={() => kr.remove(i)} />
            </div>
          ))}
          <button type="button" className="btn-secondary admin-list-add" onClick={() => kr.add({ text: '', tag: '' })}>+ 단어 추가</button>
        </div>
      </div>
      <div className="admin-word-order-col">
        <div className="admin-sublabel">🇺🇸 English</div>
        <div className="admin-list-editor">
          {english.map((it, i) => (
            <div className="admin-list-row" key={i}>
              <div className="admin-list-row-fields admin-list-row-fields-icon">
                <input value={it.text || ''} onChange={(e) => en.update(i, { text: e.target.value })} placeholder="word" />
                <input className="admin-icon-input" value={it.tag || ''} onChange={(e) => en.update(i, { tag: e.target.value })} placeholder="tag" />
              </div>
              <ListRowTools onMoveUp={() => en.move(i, -1)} onMoveDown={() => en.move(i, 1)} onDelete={() => en.remove(i)} />
            </div>
          ))}
          <button type="button" className="btn-secondary admin-list-add" onClick={() => en.add({ text: '', tag: '' })}>+ word 추가</button>
        </div>
      </div>
    </div>
  )
}

function TimelineBlockBody({ block, onChange }) {
  const points = block.points || []
  const { update, remove, move } = useListHelpers(points, (next) => onChange({ points: next }))
  const hasRange = !!block.range
  return (
    <div>
      <input value={block.label || ''} onChange={(e) => onChange({ label: e.target.value })} placeholder="라벨 (선택)" />
      <label className="admin-inline-label">
        지금 위치 (0~100)
        <input
          type="number" min="0" max="100"
          value={block.now ?? 100}
          onChange={(e) => onChange({ now: Number(e.target.value) })}
        />
      </label>

      <div className="admin-list-editor">
        <div className="admin-sublabel">시점(포인트)</div>
        {points.map((p, i) => (
          <div className="admin-list-row" key={i}>
            <div className="admin-list-row-fields admin-list-row-fields-icon">
              <input type="number" min="0" max="100" className="admin-icon-input" value={p.at ?? 0} onChange={(e) => update(i, { at: Number(e.target.value) })} placeholder="위치" />
              <input value={p.text || ''} onChange={(e) => update(i, { text: e.target.value })} placeholder="텍스트" />
              <input value={p.sub || ''} onChange={(e) => update(i, { sub: e.target.value })} placeholder="부가 설명 (선택)" />
            </div>
            <ListRowTools onMoveUp={() => move(i, -1)} onMoveDown={() => move(i, 1)} onDelete={() => remove(i)} />
          </div>
        ))}
        <button type="button" className="btn-secondary admin-list-add" onClick={() => onChange({ points: [...points, { at: 50, text: '' }] })}>
          + 시점 추가
        </button>
      </div>

      <div className="admin-sublabel">구간 (선택)</div>
      {hasRange ? (
        <div className="admin-list-row-fields admin-list-row-fields-icon">
          <input type="number" min="0" max="100" className="admin-icon-input" value={block.range.from ?? 0} onChange={(e) => onChange({ range: { ...block.range, from: Number(e.target.value) } })} placeholder="시작" />
          <input type="number" min="0" max="100" className="admin-icon-input" value={block.range.to ?? 0} onChange={(e) => onChange({ range: { ...block.range, to: Number(e.target.value) } })} placeholder="끝" />
          <input value={block.range.text || ''} onChange={(e) => onChange({ range: { ...block.range, text: e.target.value } })} placeholder="구간 텍스트" />
          <button type="button" className="admin-block-delete" onClick={() => onChange({ range: null })}>구간 삭제</button>
        </div>
      ) : (
        <button type="button" className="btn-secondary" onClick={() => onChange({ range: { from: 0, to: 50, text: '' } })}>+ 구간 추가</button>
      )}

      <input value={block.translation || ''} onChange={(e) => onChange({ translation: e.target.value })} placeholder="번역 (선택)" />
    </div>
  )
}

function TransformBlockBody({ block, onChange }) {
  const fromItems = Array.isArray(block.from) ? block.from : block.from ? [block.from] : []
  const { update, remove, move } = useListHelpers(fromItems, (next) => onChange({ from: next }))
  const to = block.to || { label: '', text: '' }
  return (
    <div>
      <div className="admin-sublabel">이전 (from)</div>
      <div className="admin-list-editor">
        {fromItems.map((f, i) => (
          <div className="admin-list-row" key={i}>
            <div className="admin-list-row-fields admin-list-row-fields-icon">
              <input className="admin-icon-input" value={f.label || ''} onChange={(e) => update(i, { label: e.target.value })} placeholder="라벨 (선택)" />
              <input value={f.text || ''} onChange={(e) => update(i, { text: e.target.value })} placeholder="문장/텍스트" />
            </div>
            <ListRowTools onMoveUp={() => move(i, -1)} onMoveDown={() => move(i, 1)} onDelete={() => remove(i)} />
          </div>
        ))}
        <button type="button" className="btn-secondary admin-list-add" onClick={() => onChange({ from: [...fromItems, { label: '', text: '' }] })}>
          + from 추가
        </button>
      </div>
      <div className="admin-sublabel">이후 (to)</div>
      <div className="admin-list-row-fields admin-list-row-fields-icon">
        <input className="admin-icon-input" value={to.label || ''} onChange={(e) => onChange({ to: { ...to, label: e.target.value } })} placeholder="라벨 (선택)" />
        <input value={to.text || ''} onChange={(e) => onChange({ to: { ...to, text: e.target.value } })} placeholder="문장/텍스트" />
      </div>
      <input value={block.note || ''} onChange={(e) => onChange({ note: e.target.value })} placeholder="설명 노트 (선택)" />
    </div>
  )
}

function TableBlockBody({ block, onChange }) {
  const headers = block.headers || []
  const rows = block.rows || []

  function setHeader(i, value) {
    const next = [...headers]
    next[i] = value
    onChange({ headers: next })
  }
  function addColumn() {
    onChange({ headers: [...headers, ''], rows: rows.map((r) => [...r, '']) })
  }
  function removeColumn(i) {
    onChange({ headers: headers.filter((_, idx) => idx !== i), rows: rows.map((r) => r.filter((_, idx) => idx !== i)) })
  }
  function setCell(r, c, value) {
    const next = rows.map((row) => [...row])
    next[r][c] = value
    onChange({ rows: next })
  }
  function addRow() {
    onChange({ rows: [...rows, headers.map(() => '')] })
  }
  function removeRow(i) {
    onChange({ rows: rows.filter((_, idx) => idx !== i) })
  }
  function moveRow(i, dir) {
    const target = i + dir
    if (target < 0 || target >= rows.length) return
    const next = [...rows]
    ;[next[i], next[target]] = [next[target], next[i]]
    onChange({ rows: next })
  }

  return (
    <div className="admin-table-body">
      <input value={block.caption || ''} onChange={(e) => onChange({ caption: e.target.value })} placeholder="표 캡션 (선택)" />
      <div className="admin-table-grid-wrap">
        <table className="admin-table-grid">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>
                  <input value={h} onChange={(e) => setHeader(i, e.target.value)} placeholder={`열 ${i + 1}`} />
                  <button type="button" className="admin-block-delete" onClick={() => removeColumn(i)}>✕</button>
                </th>
              ))}
              <th className="admin-table-add-col">
                <button type="button" className="btn-secondary" onClick={addColumn}>+ 열</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                {headers.map((_, c) => (
                  <td key={c}>
                    <input value={row[c] || ''} onChange={(e) => setCell(r, c, e.target.value)} />
                  </td>
                ))}
                <td className="admin-table-row-tools">
                  <button type="button" onClick={() => moveRow(r, -1)} title="위로">↑</button>
                  <button type="button" onClick={() => moveRow(r, 1)} title="아래로">↓</button>
                  <button type="button" className="admin-block-delete" onClick={() => removeRow(r)} title="삭제">✕</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" className="btn-secondary admin-list-add" onClick={addRow}>+ 행 추가</button>
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

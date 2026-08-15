import { useEffect, useRef } from 'react'
import './FruitSliceCanvas.css'

const FRUIT_EMOJI = ['🍉', '🍊', '🍋', '🍇', '🍎', '🍑', '🍓', '🥝']
const HIT_RADIUS = 42

function wrapLines(ctx, text, maxWidth, maxLines) {
  const words = String(text).split(/\s+/)
  const lines = []
  let line = ''
  for (const w of words) {
    const test = line ? `${line} ${w}` : w
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line)
      line = w
      if (lines.length >= maxLines - 1) break
    } else {
      line = test
    }
  }
  if (line) lines.push(line)
  if (lines.length > maxLines) lines.length = maxLines
  return lines
}

function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1
  const dy = y2 - y1
  const lenSq = dx * dx + dy * dy
  let t = lenSq === 0 ? 0 : ((px - x1) * dx + (py - y1) * dy) / lenSq
  t = Math.max(0, Math.min(1, t))
  const cx = x1 + t * dx
  const cy = y1 + t * dy
  return Math.hypot(px - cx, py - cy)
}

export default function FruitSliceCanvas({ options, answerIndex, picked, isAnswered, resultKind, flightMs, onSlice, burstTick }) {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const stateRef = useRef(null)
  const rafRef = useRef(null)
  const prevBurstTickRef = useRef(burstTick)

  useEffect(() => {
    const n = options.length
    const g = (h) => (8 * (h * 0.52)) / (flightMs * flightMs)
    stateRef.current = {
      startTime: performance.now(),
      frozenT: null,
      sliced: -1,
      trail: [],
      dragging: false,
      particles: [],
      fruits: Array.from({ length: n }, (_, i) => ({
        i,
        emoji: FRUIT_EMOJI[i % FRUIT_EMOJI.length],
        frac: n > 1 ? i / (n - 1) : 0.5,
        driftVX: (Math.random() - 0.5) * 0.06,
        rotSpeed: (Math.random() - 0.5) * 0.004,
        gFn: g,
      })),
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    function resize() {
      const w = wrap.clientWidth
      const h = Math.round(w * 0.56)
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      const ctx = canvas.getContext('2d')
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (isAnswered && stateRef.current && stateRef.current.frozenT === null) {
      const elapsed = performance.now() - stateRef.current.startTime
      stateRef.current.frozenT = Math.min(1, elapsed / flightMs)
    }
    if (!isAnswered && stateRef.current) {
      stateRef.current.frozenT = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswered])

  function fruitPos(fruit, canvas, tMs) {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    const startX = w * (0.1 + 0.8 * fruit.frac)
    const startY = h + 30
    const peakHeight = h * 0.52
    const g = fruit.gFn(h)
    const vy0 = -(g * flightMs) / 2
    const t = Math.max(0, Math.min(tMs, flightMs))
    const x = startX + fruit.driftVX * t
    const y = startY + vy0 * t + 0.5 * g * t * t
    return { x, y, rot: fruit.i * 0.6 + t * fruit.rotSpeed, alive: tMs >= 0 && tMs <= flightMs, peakHeight }
  }

  function spawnBurst(x, y) {
    const st = stateRef.current
    if (!st) return
    const glyphs = ['✨', '⭐', '✨', '⭐', '💥']
    for (let i = 0; i < glyphs.length; i++) {
      const angle = (Math.PI * 2 * i) / glyphs.length
      st.particles.push({
        x, y,
        vx: Math.cos(angle) * (1.5 + Math.random() * 2),
        vy: Math.sin(angle) * (1.5 + Math.random() * 2),
        life: 36,
        maxLife: 36,
        size: 16 + Math.random() * 8,
        glyph: glyphs[i],
      })
    }
  }

  useEffect(() => {
    function draw(now) {
      rafRef.current = requestAnimationFrame(draw)
      const canvas = canvasRef.current
      const st = stateRef.current
      if (!canvas || !st) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      const ctx = canvas.getContext('2d')

      const elapsed = now - st.startTime
      const tMs = st.frozenT !== null ? st.frozenT * flightMs : elapsed

      ctx.clearRect(0, 0, w, h)
      const sky = ctx.createLinearGradient(0, 0, 0, h)
      sky.addColorStop(0, '#fff3e0')
      sky.addColorStop(1, '#fffaf0')
      ctx.fillStyle = sky
      ctx.fillRect(0, 0, w, h)

      // fruits
      options.forEach((opt, i) => {
        const fruit = st.fruits[i]
        if (!fruit) return
        const { x, y, rot } = fruitPos(fruit, canvas, tMs)
        const isSliced = st.sliced === i
        const isAnswerFruit = isAnswered && i === answerIndex
        const isWrongPicked = isAnswered && i === picked && i !== answerIndex

        ctx.save()
        ctx.globalAlpha = isAnswered && !isAnswerFruit && !isWrongPicked ? 0.35 : 1
        ctx.translate(x, y)
        ctx.rotate(isSliced ? 0 : rot)

        if (isSliced || isAnswerFruit || isWrongPicked) {
          ctx.beginPath()
          ctx.arc(0, 0, HIT_RADIUS * 0.62, 0, Math.PI * 2)
          ctx.fillStyle = isWrongPicked ? 'rgba(226, 73, 61, 0.25)' : 'rgba(31, 157, 99, 0.25)'
          ctx.fill()
          ctx.strokeStyle = isWrongPicked ? '#e2493d' : '#1f9d63'
          ctx.lineWidth = 3
          ctx.stroke()
        }

        ctx.font = '40px sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(fruit.emoji, 0, 0)
        ctx.restore()

        // label chip
        ctx.save()
        ctx.translate(x, y + 34)
        ctx.font = '600 13px "Pretendard Variable", "Apple SD Gothic Neo", sans-serif'
        const lines = wrapLines(ctx, opt, 96, 2)
        const lineH = 15
        const boxH = lines.length * lineH + 10
        const boxW = 106
        ctx.fillStyle = 'rgba(255,255,255,0.92)'
        ctx.strokeStyle = 'rgba(230,220,200,0.9)'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.roundRect(-boxW / 2, -boxH / 2, boxW, boxH, 8)
        ctx.fill()
        ctx.stroke()
        ctx.fillStyle = '#1c1a22'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        const startY2 = -((lines.length - 1) * lineH) / 2
        lines.forEach((ln, li) => ctx.fillText(ln, 0, startY2 + li * lineH))
        ctx.restore()
      })

      // slice trail
      if (st.trail.length > 1) {
        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        for (let i = 1; i < st.trail.length; i++) {
          const a = st.trail[i - 1]
          const b = st.trail[i]
          const age = i / st.trail.length
          ctx.globalAlpha = age
          ctx.strokeStyle = '#ff8a3d'
          ctx.lineWidth = 6 * age
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
        ctx.restore()
        st.trail = st.trail.filter((p) => now - p.t < 160)
      }

      // particles
      st.particles = st.particles.filter((p) => p.life > 0)
      st.particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1
        p.life -= 1
        ctx.globalAlpha = Math.max(0, p.life / p.maxLife)
        ctx.font = `${p.size}px sans-serif`
        ctx.textAlign = 'center'
        ctx.fillText(p.glyph, p.x, p.y)
      })
      ctx.globalAlpha = 1
    }
    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, answerIndex, picked, isAnswered, resultKind, flightMs])

  useEffect(() => {
    if (burstTick !== prevBurstTickRef.current) {
      prevBurstTickRef.current = burstTick
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [burstTick])

  function tryHit(x, y, checkSegment) {
    const st = stateRef.current
    const canvas = canvasRef.current
    if (!st || !canvas || isAnswered || st.sliced !== -1) return
    const now = performance.now()
    const tMs = now - st.startTime
    for (let i = 0; i < options.length; i++) {
      const fruit = st.fruits[i]
      const pos = fruitPos(fruit, canvas, tMs)
      if (!pos.alive) continue
      const hit = checkSegment
        ? distToSegment(pos.x, pos.y, checkSegment.x1, checkSegment.y1, x, y) < HIT_RADIUS
        : Math.hypot(x - pos.x, y - pos.y) < HIT_RADIUS
      if (hit) {
        st.sliced = i
        if (i === answerIndex) spawnBurst(pos.x, pos.y)
        onSlice(i)
        return
      }
    }
  }

  function getPoint(e) {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  function handlePointerDown(e) {
    const st = stateRef.current
    if (!st) return
    st.dragging = true
    const p = getPoint(e)
    st.trail = [{ ...p, t: performance.now() }]
    tryHit(p.x, p.y, null)
  }

  function handlePointerMove(e) {
    const st = stateRef.current
    if (!st || !st.dragging) return
    const p = getPoint(e)
    const prev = st.trail[st.trail.length - 1]
    st.trail.push({ ...p, t: performance.now() })
    if (prev) tryHit(p.x, p.y, { x1: prev.x, y1: prev.y })
  }

  function handlePointerUp() {
    const st = stateRef.current
    if (st) st.dragging = false
  }

  return (
    <div ref={wrapRef} className="fsc-wrap">
      <canvas
        ref={canvasRef}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      />
    </div>
  )
}

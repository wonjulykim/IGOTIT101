import { useEffect, useRef } from 'react'
import './RunnerCanvas.css'

const LANE_MARGIN = 0.08 // side margin as fraction of canvas width at t=1

function easeInQuad(t) {
  return t * t
}

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

export default function RunnerCanvas({ options, answerIndex, picked, isAnswered, resultKind, runMs, onPick, burstTick }) {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const stateRef = useRef(null)
  const rafRef = useRef(null)
  const gateRectsRef = useRef([])
  const prevBurstTickRef = useRef(burstTick)

  useEffect(() => {
    stateRef.current = {
      startTime: performance.now(),
      frozenT: null,
      particles: [],
      lastBurst: 0,
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
      stateRef.current.frozenT = Math.min(1, elapsed / runMs)
    }
    if (!isAnswered && stateRef.current) {
      stateRef.current.frozenT = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswered])

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
      const t = st.frozenT !== null ? st.frozenT : Math.min(1, elapsed / runMs)
      const eased = easeInQuad(t)

      const vpX = w / 2
      const horizonY = h * 0.16
      const nearY = h * 0.92
      const roadHalfBottom = w * (0.5 - LANE_MARGIN)

      ctx.clearRect(0, 0, w, h)

      // sky
      const sky = ctx.createLinearGradient(0, 0, 0, horizonY + 10)
      sky.addColorStop(0, '#ffe9d2')
      sky.addColorStop(1, '#fff6ea')
      ctx.fillStyle = sky
      ctx.fillRect(0, 0, w, horizonY + 10)

      // ground
      ctx.fillStyle = '#fffaf0'
      ctx.fillRect(0, horizonY, w, h - horizonY)

      // road trapezoid
      ctx.beginPath()
      ctx.moveTo(vpX - 4, horizonY)
      ctx.lineTo(vpX + 4, horizonY)
      ctx.lineTo(vpX + roadHalfBottom, nearY)
      ctx.lineTo(vpX - roadHalfBottom, nearY)
      ctx.closePath()
      ctx.fillStyle = 'rgba(255, 138, 61, 0.10)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(255, 138, 61, 0.45)'
      ctx.lineWidth = 2
      ctx.stroke()

      // perspective floor ties (scrolling toward viewer)
      const tieCycle = Math.max(260, runMs / 7)
      const tieCount = 9
      ctx.strokeStyle = 'rgba(255, 138, 61, 0.3)'
      for (let k = 0; k < tieCount; k++) {
        const phase = ((elapsed / tieCycle) + k / tieCount) % 1
        const d = easeInQuad(phase)
        const y = horizonY + (nearY - horizonY) * d
        const halfW = 4 + roadHalfBottom * d
        ctx.globalAlpha = 0.25 + 0.5 * d
        ctx.beginPath()
        ctx.moveTo(vpX - halfW, y)
        ctx.lineTo(vpX + halfW, y)
        ctx.stroke()
      }
      ctx.globalAlpha = 1

      // speed lines along the far edges (warp effect)
      const lineCycle = Math.max(160, runMs / 16)
      ctx.strokeStyle = 'rgba(255, 178, 100, 0.55)'
      ctx.lineWidth = 3
      for (let k = 0; k < 10; k++) {
        const phase = ((elapsed / lineCycle) + k / 10) % 1
        const d = easeInQuad(phase)
        const y0 = horizonY + (nearY - horizonY) * d
        const y1 = horizonY + (nearY - horizonY) * Math.min(1, d + 0.05)
        const side = k % 2 === 0 ? -1 : 1
        const marginX = w * 0.5 - 6
        const x = vpX + side * marginX * (0.4 + 0.6 * d)
        ctx.globalAlpha = 0.15 + 0.5 * d
        ctx.beginPath()
        ctx.moveTo(x, y0)
        ctx.lineTo(x, y1)
        ctx.stroke()
      }
      ctx.globalAlpha = 1

      // gates
      const n = options.length
      const rects = []
      for (let i = 0; i < n; i++) {
        const laneFrac = n > 1 ? (i / (n - 1)) - 0.5 : 0
        const x = vpX + laneFrac * roadHalfBottom * 2 * eased
        const y = horizonY + (nearY - horizonY) * eased - 40 * eased
        const scale = 0.45 + 0.75 * eased
        const gateW = Math.min(w / n - 10, 210) * scale
        const gateH = 84 * scale

        let fill = '#ffffff'
        let stroke = 'rgba(230, 220, 200, 0.9)'
        if (isAnswered && i === answerIndex) {
          fill = 'rgba(31, 157, 99, 0.22)'
          stroke = '#1f9d63'
        } else if (isAnswered && i === picked && i !== answerIndex) {
          fill = 'rgba(226, 73, 61, 0.22)'
          stroke = '#e2493d'
        }

        ctx.save()
        ctx.translate(x, y)
        ctx.shadowColor = 'rgba(60,40,10,0.15)'
        ctx.shadowBlur = 8 * scale
        ctx.fillStyle = fill
        ctx.strokeStyle = stroke
        ctx.lineWidth = 2.5 * scale
        const rx = 12 * scale
        ctx.beginPath()
        ctx.roundRect(-gateW / 2, -gateH / 2, gateW, gateH, rx)
        ctx.fill()
        ctx.stroke()
        ctx.shadowBlur = 0

        ctx.fillStyle = '#1c1a22'
        ctx.font = `${Math.max(10, 14 * scale)}px "Pretendard Variable", "Apple SD Gothic Neo", sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        const lines = wrapLines(ctx, options[i], gateW - 16 * scale, 4)
        const lineH = 16 * scale
        const startY = -((lines.length - 1) * lineH) / 2
        lines.forEach((ln, li) => ctx.fillText(ln, 0, startY + li * lineH))
        ctx.restore()

        rects.push({ x: x - gateW / 2, y: y - gateH / 2, w: gateW, h: gateH })
      }
      gateRectsRef.current = rects

      // dust puff behind runner
      if (!isAnswered) {
        const puffPhase = (elapsed % 500) / 500
        ctx.globalAlpha = 0.5 * (1 - puffPhase)
        ctx.font = `${20 + 8 * puffPhase}px sans-serif`
        ctx.textAlign = 'center'
        ctx.fillText('💨', vpX - 30 - puffPhase * 14, nearY - 6)
        ctx.globalAlpha = 1
      }

      // runner
      const bob = Math.sin(elapsed / 130) * 8
      const tilt = Math.sin(elapsed / 130) * 0.12
      ctx.save()
      ctx.translate(vpX, nearY - 14 + (isAnswered && resultKind === 'wrong' ? 0 : bob))
      if (isAnswered && resultKind === 'wrong') {
        ctx.translate((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6)
      } else {
        ctx.rotate(tilt)
      }
      ctx.font = '46px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('🏃', 0, 0)
      ctx.restore()

      // particles (star burst)
      st.particles = st.particles.filter((p) => p.life > 0)
      st.particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.12
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
  }, [options, answerIndex, picked, isAnswered, resultKind, runMs])

  function spawnBurst() {
    const canvas = canvasRef.current
    const st = stateRef.current
    if (!canvas || !st) return
    const originX = canvas.clientWidth / 2
    const originY = canvas.clientHeight * 0.92 - 30
    const glyphs = ['✨', '⭐', '✨', '⭐', '✨', '⭐']
    for (let i = 0; i < glyphs.length; i++) {
      const angle = (Math.PI / glyphs.length) * i - Math.PI / 2 - Math.PI / 4
      st.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * (2 + Math.random() * 2),
        vy: Math.sin(angle) * (2 + Math.random() * 2) - 2,
        life: 40,
        maxLife: 40,
        size: 16 + Math.random() * 8,
        glyph: glyphs[i],
      })
    }
  }

  function handleClick(e) {
    if (isAnswered) return
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const hit = gateRectsRef.current.findIndex((r) => x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h)
    if (hit !== -1) onPick(hit)
  }

  useEffect(() => {
    if (burstTick !== prevBurstTickRef.current) {
      spawnBurst()
      prevBurstTickRef.current = burstTick
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [burstTick])

  return (
    <div ref={wrapRef} className="rrc-wrap">
      <canvas ref={canvasRef} onClick={handleClick} />
    </div>
  )
}

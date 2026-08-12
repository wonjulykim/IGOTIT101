const MUTE_KEY = 'agarit-sound-muted'

let ctx = null
function getCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  return ctx
}

export function isMuted() {
  return localStorage.getItem(MUTE_KEY) === '1'
}

export function setMuted(muted) {
  localStorage.setItem(MUTE_KEY, muted ? '1' : '0')
}

function beep({ freq, duration, type = 'sine', delay = 0, gain = 0.15 }) {
  if (isMuted()) return
  try {
    const audioCtx = getCtx()
    const osc = audioCtx.createOscillator()
    const g = audioCtx.createGain()
    osc.type = type
    osc.frequency.value = freq
    osc.connect(g)
    g.connect(audioCtx.destination)
    const start = audioCtx.currentTime + delay
    g.gain.setValueAtTime(gain, start)
    g.gain.exponentialRampToValueAtTime(0.001, start + duration)
    osc.start(start)
    osc.stop(start + duration)
  } catch {
    // Web Audio unavailable — fail silently
  }
}

export function playCorrect() {
  beep({ freq: 660, duration: 0.12 })
  beep({ freq: 880, duration: 0.16, delay: 0.09 })
}

export function playWrong() {
  beep({ freq: 220, duration: 0.28, type: 'sawtooth', gain: 0.12 })
}

export function playCombo() {
  beep({ freq: 523, duration: 0.09 })
  beep({ freq: 659, duration: 0.09, delay: 0.08 })
  beep({ freq: 784, duration: 0.16, delay: 0.16 })
}

export function playClear() {
  ;[523, 659, 784, 1047].forEach((f, i) => beep({ freq: f, duration: 0.18, delay: i * 0.1 }))
}

export function playOver() {
  beep({ freq: 300, duration: 0.2, type: 'sawtooth', gain: 0.12 })
  beep({ freq: 210, duration: 0.32, type: 'sawtooth', gain: 0.12, delay: 0.16 })
}

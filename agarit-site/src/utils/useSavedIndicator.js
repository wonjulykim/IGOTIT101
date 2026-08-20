import { useEffect, useRef, useState } from 'react'

// 값이 바뀔 때마다 잠깐 "저장 중" 상태를 보여주고, 입력이 멈추면 "저장됨"으로 바뀐다.
// 마운트 시 이미 저장된 값이 있으면(새로고침 등) 곧바로 "저장됨"으로 표시한다.
export function useSavedIndicator(value, delay = 600) {
  const [saved, setSaved] = useState(() => !!(value && String(value).trim()))
  const mountedRef = useRef(false)

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true
      return
    }
    setSaved(false)
    const timer = setTimeout(() => setSaved(!!(value && String(value).trim())), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return saved
}

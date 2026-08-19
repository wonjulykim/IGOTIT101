// AI가 돌려준 annotations([{ quote, issue, suggestion, type }])를
// 원문(text)과 대조해 하이라이트용 세그먼트 배열로 변환한다.
// quote는 원문에 등장하는 순서대로 온다고 가정하고, 앞에서부터 순차 검색한다.
export function buildAnnotatedSegments(text, annotations) {
  if (!text || !annotations?.length) return [{ type: 'text', text: text || '' }]

  const segments = []
  let cursor = 0
  let matchedCount = 0

  annotations.forEach((a, i) => {
    const quote = a?.quote
    if (!quote) return
    let idx = text.indexOf(quote, cursor)
    if (idx === -1) idx = text.indexOf(quote)
    if (idx === -1) return

    if (idx > cursor) segments.push({ type: 'text', text: text.slice(cursor, idx) })
    segments.push({ type: 'annotation', text: quote, index: i, annotation: a })
    cursor = idx + quote.length
    matchedCount++
  })

  if (cursor < text.length) segments.push({ type: 'text', text: text.slice(cursor) })
  if (matchedCount === 0) return [{ type: 'text', text }]

  return segments
}

export function renderEmphasis(text) {
  if (typeof text !== 'string') return text
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? { bold: true, key: i, text: part.slice(2, -2) } : part
  )
}

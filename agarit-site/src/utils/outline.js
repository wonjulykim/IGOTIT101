export function getHeadingOutline(blocks) {
  return blocks
    .map((block, i) => ({ block, i }))
    .filter(({ block }) => block.type === 'heading')
    .map(({ block, i }) => ({ id: `heading-${i}`, text: block.text }))
}

export function sortUp(array) {
  return array.sort((a, b) => a.price - b.price)
}

export function sortDown(array) {
  return array.sort((a, b) => b.price - a.price)
}

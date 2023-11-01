export function searchRestaurant(array, search) {
  return array.filter(item =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  )
}

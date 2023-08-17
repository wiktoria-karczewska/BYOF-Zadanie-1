export function sortByName(products) {
  products.sort((a, b) => a.name.localeCompare(b.name));
}

import { allProducts } from "./main";

export function sortByName(products) {
  let allProductsSortedArray = [];
  const allProductsSorted = allProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  allProductsSortedArray = allProductsSorted;
}

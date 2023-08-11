import { allProducts } from "./main";

export function sortByName(products) {
  const allProductsSorted = allProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  console.log(allProductsSorted);
}

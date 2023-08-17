import { makeApiCall } from "./api/makeApiCall";

export async function getProducts() {
  const products = await makeApiCall("products/categories");
  return products;
}

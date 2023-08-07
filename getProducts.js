export async function getProducts() {
  const response = await fetch(
    "https://api-eko-bazarek.azurewebsites.net/api/products/categories"
  );
  const products = await response.json();
  return products;
}

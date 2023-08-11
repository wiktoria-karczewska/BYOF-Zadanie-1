// Wczytywanie wszystkich informacji o kategoraich z API (id, name, type, url)

export async function getProducts() {
  const response = await fetch(
    "https://api-eko-bazarek.azurewebsites.net/api/products/categories"
  );
  const products = await response.json();
  return products;
}

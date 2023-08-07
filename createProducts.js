import { allProducts } from "./main.js";
export function createProducts(event) {
  const productType = event.target.id;

  const filteredByType = allProducts.filter((product) => {
    return productType === product.type;
  });
  console.log(filteredByType);

  const productsList = document.createElement("ul");

  filteredByType.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.setAttribute("id", product.id);
    productItem.innerHTML = product.name;

    productsList.appendChild(productItem);
  });

  const parentElement = document.getElementById("products");

  parentElement.innerHTML = "";
  parentElement.appendChild(productsList);
}

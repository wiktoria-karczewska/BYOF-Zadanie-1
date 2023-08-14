import { getProducts } from "./getProducts.js";
import { allProducts } from "./main.js";
import { sortByName } from "./sortByName.js";

export function createAllProducts() {
  getProducts();

  const productsList = document.createElement("ul");

  allProducts.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.setAttribute("id", product.id);
    productItem.innerHTML = product.name;

    const productItemImage = document.createElement("img");
    productItemImage.setAttribute("src", product.iconUrl);

    productItem.appendChild(productItemImage);
    productsList.appendChild(productItem);
  });

  const parentElement = document.getElementById("products");

  parentElement.innerHTML = "";
  parentElement.appendChild(productsList);

  sortByName();
}

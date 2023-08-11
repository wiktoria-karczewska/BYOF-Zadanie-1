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

    const productItemImage = document.createElement("img");
    productItemImage.setAttribute("src", product.iconUrl);

    productItem.appendChild(productItemImage);
    productsList.appendChild(productItem);
  });

  // filteredByType.forEach((product) => {
  //   const productItemImage = productItem.createElement("img");
  //   productItemImage.setAttribute("src", product.iconUrl);

  //   productItem.appendChild(productItemImage);
  // });

  const parentElement = document.getElementById("products");

  parentElement.innerHTML = "";
  parentElement.appendChild(productsList);
}

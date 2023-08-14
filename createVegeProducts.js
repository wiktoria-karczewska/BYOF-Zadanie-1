import { allProducts } from "./main";
import { sortByName } from "./sortByName";

export function createVegeProducts(product) {
  sortByName();
  const productType = product.type;

  const filteredVege = allProducts.filter((product) => {
    return productType === "MEAT" || productType === "FISHES";
  });

  console.log(filteredVege);

  const vegeProductsList = document.createElement("ul");

  filteredVege.forEach((product) => {
    const vegeProductItem = document.createElement("li");
    vegeProductItem.setAttribute("id", product.id);
    vegeProductItem.innerHTML = product.name;

    const vegeProductItemImage = document.createElement("img");
    vegeProductItemImage.setAttribute("src", product.iconUrl);
    vegeProductItem.appendChild(vegeProductItemImage);
    vegeProductsList.appendChild(vegeProductItem);
  });

  const parentElement = document.getElementById("products");

  parentElement.innerHTML = "";
  parentElement?.appendChild(vegeProductsList);
}

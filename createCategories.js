import { createProducts } from "./createProducts.js";
import { changeElementColor } from "./changeElementColor.js";

let activeElement = null;

function onCategoryClick(event) {
  if (activeElement) {
    changeElementColor(activeElement, "#fff");
  }
  createProducts(event);
  console.log(activeElement);

  activeElement = event.target;
  changeElementColor(activeElement, "#46AA42");
}

export function createCategories(categories, parentElement) {
  const categoriesList = document.createElement("ul");

  categories.forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.setAttribute("id", category.id);
    categoryItem.setAttribute("class", "button");
    categoryItem.innerHTML = category.name;
    categoryItem.addEventListener("click", onCategoryClick);

    categoriesList.appendChild(categoryItem);
  });

  parentElement.appendChild(categoriesList);
}

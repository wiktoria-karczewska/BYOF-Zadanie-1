import { createProducts } from "./createProducts.js";
export function createCategories(categories, parentElement) {
  const categoriesList = document.createElement("ul");

  categories.forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.setAttribute("id", category.id);
    categoryItem.setAttribute("class", "button");
    categoryItem.setAttribute("onclick", "changeButtonColor()");
    categoryItem.innerHTML = category.name;
    categoryItem.addEventListener("click", createProducts);

    categoriesList.appendChild(categoryItem);
  });

  parentElement.appendChild(categoriesList);
}

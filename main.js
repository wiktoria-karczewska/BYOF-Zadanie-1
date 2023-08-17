import { sortByName } from "./sortByName.js";
import "./style.css";
import { getProducts } from "./getProducts.js";
import { createCategories } from "./createCategories.js";
import { getFullYear } from "./getFullYear";
import { createAllProducts } from "./createAllProducts.js";
import { createVegeProducts } from "./createVegeProducts.js";
import { changeButtonColor } from "./changeButtonColor.js";

export let allProducts = [];

getProducts().then((products) => {
  allProducts = products;
});

async function getCategories() {
  const response = await fetch(
    "https://api-eko-bazarek.azurewebsites.net/api/products/types"
  );
  const categories = await response.json();
  return categories;
}

async function createStartContent() {
  const categories = await getCategories();
  const parentElement = document.getElementById("types");
  createCategories(categories, parentElement);

  sortByName(allProducts);

  createAllProducts();
}

createStartContent();

getFullYear();

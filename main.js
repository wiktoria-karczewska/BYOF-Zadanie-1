import "./style.css";
import { getProducts } from "./getProducts.js";
import { createCategories } from "./createCategories.js";

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

async function createSideMenu() {
  const categories = await getCategories();
  const parentElement = document.getElementById("types");
  createCategories(categories, parentElement);
}

createSideMenu();

import { sortByName } from "./sortByName.js";
import "./style.css";
import { getProducts } from "./getProducts.js";
import { createCategories } from "./createCategories.js";
import { getFullYear } from "./getFullYear";
import { createAllProducts } from "./createAllProducts.js";
import { buttonColor } from "./buttonColor.js";

export let allProducts = [];

// Przypisanie wszystkich informacji o kategoriach z API do tablicy
getProducts().then((products) => {
  allProducts = products;
});

// Wczytanie informacji o typach z API
async function getCategories() {
  const response = await fetch(
    "https://api-eko-bazarek.azurewebsites.net/api/products/types"
  );
  const categories = await response.json();
  return categories;
}

// Stworzenie listy (nawigacji i produktów)
async function createStartContent() {
  const categories = await getCategories();
  const parentElement = document.getElementById("types");
  createCategories(categories, parentElement);

  createAllProducts();

  buttonColor();
}

createStartContent();

document.addEventListener("DOMContentLoaded", () => {
  createAllProducts();
});

getFullYear();

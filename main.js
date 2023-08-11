import "./style.css";
import { getProducts } from "./getProducts.js";
import { createCategories } from "./createCategories.js";
import { getFullYear } from "./getFullYear";

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

// Stworzenie listy (nawiga)
async function createSideMenu() {
  const categories = await getCategories();
  const parentElement = document.getElementById("types");
  createCategories(categories, parentElement);
}

createSideMenu();

getFullYear();

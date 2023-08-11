// Aktualizacja roku w stopce

export function getFullYear() {
  const yearSpan = document.querySelector("#currentYear");
  const currentYear = new Date();
  yearSpan.innerHTML = currentYear.getFullYear();
}

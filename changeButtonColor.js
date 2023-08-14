export function changeButtonColor() {
  const button = document.querySelector(".button");

  button.addEventListener("click", function onClick() {
    button.style.backgroundColor = "#46AA42";
  });
}

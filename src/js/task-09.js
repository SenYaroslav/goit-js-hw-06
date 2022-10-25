function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const currentColorTextRef = document.querySelector(".color");
const btnChangeColorRef = document.querySelector(".change-color");

btnChangeColorRef.addEventListener("click", onClick);

function onClick() {
  const currentColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentColor;
  currentColorTextRef.innerHTML = currentColor;
}

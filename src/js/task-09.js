function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

{
  /* <body>
<p><a href="index.html">Go back</a></p>

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

<script src="js/task-09.js" type="module"></script>
</body> */
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

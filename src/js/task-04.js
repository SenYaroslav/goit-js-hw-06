const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueIdentificatorRef = document.querySelector("#value");

let counterValue = 0;

function decrementClick() {
  counterValue -= 1;
  return (valueIdentificatorRef.innerHTML = counterValue);
}

function incrementClick() {
  counterValue += 1;
  return (valueIdentificatorRef.innerHTML = counterValue);
}

decrementBtnRef.addEventListener("click", decrementClick);
incrementBtnRef.addEventListener("click", incrementClick);

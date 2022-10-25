const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    nameOutputRef.textContent = "Anonymous";
    return;
  }
  nameOutputRef.textContent = event.currentTarget.value;
});

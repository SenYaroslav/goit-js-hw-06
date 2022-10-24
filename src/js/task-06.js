const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  if (inputRef.value.length >= inputRef.getAttribute("data-length")) {
    return inputRef.classList.add("valid");
  } else {
    return inputRef.classList.add("invalid");
  }
});

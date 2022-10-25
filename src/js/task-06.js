const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", (e) => {
  if (e.target.value.length == inputRef.getAttribute("data-length")) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});

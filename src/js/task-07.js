const rangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

rangeRef.addEventListener("input", () => {
  return (textRef.style.fontSize = `${rangeRef.value}px`);
});

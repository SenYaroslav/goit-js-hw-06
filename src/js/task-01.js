const categoriesListRef = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesListRef.children.length}`);

const categoriesItemRef = document.querySelectorAll(".item");

categoriesItemRef.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});

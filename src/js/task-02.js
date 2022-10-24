const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsItemsArrRef = [];

ingredients.forEach((el) => {
  const ingredientsItemRef = document.createElement("li");
  ingredientsItemRef.textContent = el;
  ingredientsItemRef.classList.add("item");
  ingredientsItemsArrRef.push(ingredientsItemRef);
});

ingredientsListRef.append(...ingredientsItemsArrRef);

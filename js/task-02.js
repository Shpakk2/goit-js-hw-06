const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients')

// ingredients.forEach(ingredient => {
//   const li = document.createElement("li")
//   li.textContent = ingredient
//   li.classList.add('item')

//   ingredientsList.append(li)
// });


const final = ingredients.map(ingredient => {
  const li = document.createElement("li")
  li.textContent = ingredient
  li.classList.add('item')
 return li
});
console.log(final)
console.log(...final)


ingredientsList.append(...final)

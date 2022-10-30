function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls')
const boxes = document.querySelector('#boxes')

const input = controls.firstElementChild
const createBtn = input.nextElementSibling
const destroyBtn = controls.lastElementChild

// input.addEventListener("input", () => {
//   createBtn.addEventListener("click", createBoxes(input.value))
//   destroy.addEventListener('click', () => {boxes.innerHTML = ''
// input.value = ''})
// });

let inputvalue;

input.addEventListener("input", () => inputvalue = `${input.value}`);

createBtn.addEventListener("click", () => {
  createBoxes(inputvalue)
})

destroyBtn.addEventListener('click', () => {boxes.innerHTML = ''})

function createBoxes(amount) {
  let counter = 1
  let size = 20
  let array = []
while (counter <= amount) {
  counter += 1;
  size += 10
  array.push(`<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`)
}
    boxes.innerHTML = array.join("")
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector('.widget')
const btn = widget.querySelector(".change-color")
const colour = widget.querySelector('.color')

btn.addEventListener("click", () => {
  colour.textContent = getRandomHexColor()
widget.parentNode.style.backgroundColor = colour.textContent
})
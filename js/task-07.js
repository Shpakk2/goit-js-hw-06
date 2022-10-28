const input = document.querySelector("#font-size-control")
const text = document.querySelector("#text")
console.log(text)
console.log(input.value)
console.log(input.id)

input.addEventListener("input", () => {
  text.style.fontSize = `${input.value}px`;
});
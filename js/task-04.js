const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

const counterValue = document.querySelector('#value')

incrementBtn.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
});

decrementBtn.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});



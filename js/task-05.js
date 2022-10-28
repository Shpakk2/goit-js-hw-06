const textInput = document.querySelector('#name-input')
const textOutput = document.querySelector('#name-output')

const greeting = (event) => {
    textInput.value === ""? 
    textOutput.textContent = "Anonymous" :
    textOutput.textContent = event.currentTarget.value
}

textInput.addEventListener("input", greeting)
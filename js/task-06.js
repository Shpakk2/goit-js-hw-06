const textInput = document.querySelector('#validation-input')
console.log(textInput.id)

const textInputLength = textInput.dataset.length

console.log(textInputLength)

textInput.addEventListener("blur", () => { 
    if (textInput.value.length === 6) {
       return textInput.classList.add("valid")
    } textInput.classList.add("invalid")
    
})


const textInput = document.querySelector('#validation-input')

const textInputLength = textInput.dataset.length

textInput.addEventListener("blur", () => { 

    if (textInput.value.length !== 6) {
        return textInput.classList.add("invalid")
    }
    return textInput.classList.replace("invalid", "valid")
    
})


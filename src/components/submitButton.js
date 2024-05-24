function submitButton(buttonText) {
    const submitButton = document.createElement('button');
    
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = buttonText;
    
    return submitButton;
}

export { submitButton };
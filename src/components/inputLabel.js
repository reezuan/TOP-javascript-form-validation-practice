function inputLabel(inputElement, labelText) {
    const inputLabel = document.createElement('label');

    inputLabel.setAttribute('for', inputElement.getAttribute('id'));
    inputLabel.textContent = labelText;

    return inputLabel;
}

export { inputLabel };
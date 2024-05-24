function inputSpan(inputElement) {
    const inputSpan = document.createElement('span');
    inputSpan.setAttribute('data-error-type', inputElement.getAttribute('id'));
    return inputSpan;
}

export { inputSpan };
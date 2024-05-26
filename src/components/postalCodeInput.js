function postalCodeInput() {
    const postalCodeInput = document.createElement('input');

    postalCodeInput.setAttribute('type', 'tel');
    postalCodeInput.setAttribute('id', 'postal-code');
    postalCodeInput.setAttribute('name', 'postal-code');
    postalCodeInput.required = true;

    return postalCodeInput;
}

export { postalCodeInput };
function emailInput() {
    const emailInput = document.createElement('input');

    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.required = true;

    return emailInput;
}

export { emailInput };
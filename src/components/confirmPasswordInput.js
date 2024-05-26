function confirmPasswordInput() {
    const confirmPasswordInput = document.createElement('input');

    confirmPasswordInput.setAttribute('type', 'password');
    confirmPasswordInput.setAttribute('id', 'confirm-password');
    confirmPasswordInput.setAttribute('name', 'confirm-password');
    confirmPasswordInput.required = true;

    return confirmPasswordInput;
}

export { confirmPasswordInput };
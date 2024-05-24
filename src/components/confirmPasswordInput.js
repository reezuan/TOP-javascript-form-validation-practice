function confirmPasswordInput() {
    const confirmPasswordInput = document.createElement('input');

    confirmPasswordInput.setAttribute('type', 'password');
    confirmPasswordInput.setAttribute('id', 'confirm-password');
    confirmPasswordInput.setAttribute('name', 'confirm-password');

    return confirmPasswordInput;
}

export { confirmPasswordInput };
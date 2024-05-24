function passwordInput() {
    const passwordInput = document.createElement('input');

    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('id', 'password');
    passwordInput.setAttribute('name', 'password');

    return passwordInput;
}

export { passwordInput };
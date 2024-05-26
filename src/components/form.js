import { inputLabel } from "./inputLabel.js";
import { inputSpan } from "./inputSpan.js";
import { emailInput } from "./emailInput.js";
import { countryInput } from "./countryInput.js";
import { countryList } from "./countryList.js";
import { postalCodeInput } from "./postalCodeInput.js";
import { passwordInput } from "./passwordInput.js";
import { confirmPasswordInput } from "./confirmPasswordInput.js";
import { submitButton } from "./submitButton.js";

function form() {
    const form = document.createElement('form');
    form.noValidate = true;

    // ----- 'Email' field --------------------------------------------
    const emailInputDiv = document.createElement('div');
    const email = emailInput();
    const emailSpan = inputSpan(email);

    emailInputDiv.appendChild(inputLabel(email, "Email"));
    emailInputDiv.appendChild(email);
    emailInputDiv.appendChild(emailSpan);

    email.addEventListener('focusout', () => {
        if (email.className === 'empty' && email.value === '') {
            return;
        } else if (email.validity.typeMismatch && email.value !== '') {
            email.className = '';
            emailSpan.className = 'active';
            emailSpan.textContent = 'Please enter a valid email address.';
        } else {
            email.className = '';
            emailSpan.className = '';
            emailSpan.textContent = '';
        }
    });
    
    // ----- 'Country' field ------------------------------------------
    const countryInputDiv = document.createElement('div');
    const country = countryInput();
    const listOfCountries = countryList();
    const countrySpan = inputSpan(country);

    countryInputDiv.appendChild(inputLabel(country, 'Country'));
    countryInputDiv.appendChild(country);
    countryInputDiv.appendChild(listOfCountries);
    countryInputDiv.appendChild(countrySpan);

    country.addEventListener('focusout', () => {
        const countriesArray = [];
        
        document.querySelectorAll('datalist#countries > option').forEach(option => {
            countriesArray.push(option.getAttribute('value'));
        });

        if (country.className === 'empty' && country.value === '') {
            return;
        } else if (!countriesArray.includes(country.value) && country.value !== '') {
            country.setCustomValidity('Please choose a country from the list.');
            country.className = '';
            countrySpan.className = 'active';
            countrySpan.textContent = 'Please choose a country from the list.';
        } else {
            country.setCustomValidity('');
            country.className = '';
            countrySpan.className = '';
            countrySpan.textContent = '';
        }

    });
    
    // ----- 'Postal Code' field --------------------------------------
    const postalCodeDiv = document.createElement('div');
    const postalCode = postalCodeInput();
    const postalCodeSpan = inputSpan(postalCode);
    
    postalCodeDiv.appendChild(inputLabel(postalCode, 'Postal code'));
    postalCodeDiv.appendChild(postalCode);
    postalCodeDiv.appendChild(postalCodeSpan);

    postalCode.setAttribute('pattern', '\\d\\d\\d\\d\\d\\d');

    postalCode.addEventListener('focusout', () => {
        if (postalCode.className === 'empty' && postalCode.value === '') {
            return;
        } else if (postalCode.validity.patternMismatch) {
            postalCode.className = '';
            postalCodeSpan.className = 'active';
            postalCodeSpan.textContent = 'Please enter a 6-digit postal code.';
        } else {
            postalCode.className = '';
            postalCodeSpan.className = '';
            postalCodeSpan.textContent = '';
        }
    });

    // ----- 'Password' field -----------------------------------------
    const passwordDiv = document.createElement('div');
    const password = passwordInput();
    const passwordSpan = inputSpan(password);
    
    passwordDiv.appendChild(inputLabel(password, 'Password'));
    passwordDiv.appendChild(password);
    passwordDiv.appendChild(passwordSpan);

    password.addEventListener('focusout', () => {
        if (password.className === 'empty' && password.value === '') {
            return;
        } else {
            password.className = '';
            passwordSpan.className = '';
            passwordSpan.textContent = '';
        }
    });

    // ----- 'Confirm Password' field ---------------------------------
    const confirmPasswordDiv = document.createElement('div');
    const confirmPassword = confirmPasswordInput();
    const confirmPasswordSpan = inputSpan(confirmPassword);
    
    confirmPasswordDiv.appendChild(inputLabel(confirmPassword, 'Confirm password'));
    confirmPasswordDiv.appendChild(confirmPassword);
    confirmPasswordDiv.appendChild(confirmPasswordSpan);

    password.addEventListener('focusout', () => {
        if (confirmPassword.className === 'empty' && confirmPassword.value === '') {
            return;
        } else if (confirmPassword.value !== '' && confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity('The passwords don\'t match.');
            confirmPassword.className = '';
            confirmPasswordSpan.className = 'active';
            confirmPasswordSpan.textContent = 'The passwords don\'t match.';
        } else {
            confirmPassword.setCustomValidity('');
            confirmPassword.className = '';
            confirmPasswordSpan.className = '';
            confirmPasswordSpan.textContent = '';
        }
    });
    
    confirmPassword.addEventListener('focusout', () => {
        if (confirmPassword.className === 'empty' && confirmPassword.value === '') {
            return;
        } else if (confirmPassword.value !== '' && confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity('The passwords don\'t match.');
            confirmPassword.className = '';
            confirmPasswordSpan.className = 'active';
            confirmPasswordSpan.textContent = 'The passwords don\'t match.';
        } else {
            confirmPassword.setCustomValidity('');
            confirmPassword.className = '';
            confirmPasswordSpan.className = '';
            confirmPasswordSpan.textContent = '';
        }
    });
    
    // ----- Submit button --------------------------------------------
    const submit = submitButton('Sign up');

    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();

            const formInputElements = submit.closest('form').querySelectorAll('input');

            formInputElements.forEach(inputElement => {
                const inputElementSpan = inputElement.closest('div').querySelector('span');

                if (inputElement.validity.valueMissing) {
                    inputElement.className = 'empty';
                    inputElementSpan.className = 'active';
                    inputElementSpan.textContent = 'This field is required.';
                }
            });
        }        
    });
    
    // ----- Assembling the form --------------------------------------
    form.appendChild(emailInputDiv);
    form.appendChild(countryInputDiv);
    form.appendChild(postalCodeDiv);
    form.appendChild(passwordDiv);
    form.appendChild(confirmPasswordDiv);
    form.appendChild(submit);

    return form;
}

export { form };
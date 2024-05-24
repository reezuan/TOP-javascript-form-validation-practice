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

    const emailInputDiv = document.createElement('div');
    const email = emailInput();
    emailInputDiv.appendChild(inputLabel(email, "Email"));
    emailInputDiv.appendChild(email);
    emailInputDiv.appendChild(inputSpan(email));
    

    const countryInputDiv = document.createElement('div');
    const country = countryInput();
    const listOfCountries = countryList();
    countryInputDiv.appendChild(inputLabel(country, 'Country'));
    countryInputDiv.appendChild(country);
    countryInputDiv.appendChild(listOfCountries);
    countryInputDiv.appendChild(inputSpan(country));
    

    const postalCodeDiv = document.createElement('div');
    const postalCode = postalCodeInput();
    postalCodeDiv.appendChild(inputLabel(postalCode, 'Postal code'));
    postalCodeDiv.appendChild(postalCode);
    postalCodeDiv.appendChild(inputSpan(postalCode));
    

    const passwordDiv = document.createElement('div');
    const password = passwordInput();
    passwordDiv.appendChild(inputLabel(password, 'Password'));
    passwordDiv.appendChild(password);
    passwordDiv.appendChild(inputSpan(password));
    

    // ----- 'Confirm Password' field ---------------------------------
    const confirmPasswordDiv = document.createElement('div');
    const confirmPassword = confirmPasswordInput();
    const confirmPasswordSpan = inputSpan(confirmPassword);
    
    confirmPasswordDiv.appendChild(inputLabel(confirmPassword, 'Confirm password'));
    confirmPasswordDiv.appendChild(confirmPassword);
    confirmPasswordDiv.appendChild(confirmPasswordSpan);

    confirmPassword.addEventListener('focusout', () => {
        if (confirmPassword.value !== password.value) {
            confirmPasswordSpan.className = "active";
            confirmPasswordSpan.textContent = "The passwords don't match.";
        } else if (confirmPassword.value === password.value) {
            confirmPasswordSpan.className = "";
            confirmPasswordSpan.textContent = "";
        }
    });
    
    // ----- Assembling the form --------------------------------------
    form.appendChild(emailInputDiv);
    form.appendChild(countryInputDiv);
    form.appendChild(postalCodeDiv);
    form.appendChild(passwordDiv);
    form.appendChild(confirmPasswordDiv);

    const submit = submitButton('Sign up');
    form.appendChild(submit);

    return form;
}

export { form };
import { inputLabel } from "./inputLabel.js";
import { emailInput } from "./emailInput.js";
import { countryInput } from "./countryInput.js";
import { countryList } from "./countryList.js";
import { postalCodeInput } from "./postalCodeInput.js";

function form() {
    const form = document.createElement('form');
    form.noValidate = true;

    const emailInputDiv = document.createElement('div');
    const email = emailInput();
    emailInputDiv.appendChild(inputLabel(email, "Email"));
    emailInputDiv.appendChild(email);
    form.appendChild(emailInputDiv);

    const countryInputDiv = document.createElement('div');
    const country = countryInput();
    const listOfCountries = countryList();
    countryInputDiv.appendChild(inputLabel(country, 'Country'));
    countryInputDiv.appendChild(country);
    countryInputDiv.appendChild(listOfCountries);
    form.appendChild(countryInputDiv);

    const postalCodeDiv = document.createElement('div');
    const postalCode = postalCodeInput();
    postalCodeDiv.appendChild(inputLabel(postalCode, 'Postal code'));
    postalCodeDiv.appendChild(postalCode);
    form.appendChild(postalCodeDiv);

    return form;
}

export { form };
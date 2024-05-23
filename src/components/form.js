import { inputLabel } from "./inputLabel.js";
import { emailInput } from "./emailInput.js";
import { countryInput } from "./countryInput.js";
import { countryList } from "./countryList.js";

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

    return form;
}

export { form };
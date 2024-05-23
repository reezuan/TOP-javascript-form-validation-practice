function countryInput() {
    const countryInput = document.createElement('input');

    countryInput.setAttribute('list', 'countries');
    countryInput.setAttribute('id', 'country');
    countryInput.setAttribute('name', 'country');

    return countryInput;
}

export { countryInput };
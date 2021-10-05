import './sass/main.scss';

import countryCardTpl from './handlebars/country-card.hbs';

const cardContainer = document.querySelector('.js-card-container');
const inputSearch = document.querySelector('.js-input-search');

inputSearch.addEventListener('input', onSearch);

function onSearch(event) {
    fetchCountry(event.target.value).then(renderCountryCard);
}

function fetchCountry(params) {
    return fetch(`https://restcountries.com/v2/name/${params}`).then(res => res.json());
}

function renderCountryCard(country) {
    cardContainer.insertAdjacentHTML('beforeend', countryCardTpl(country));
}

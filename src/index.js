import './sass/main.scss';
import { debounce } from 'lodash';
import { refs } from './js/refs';
import CountryApiService from './js/api/countryApiService';
import countryCardTpl from './handlebars/country-card.hbs';

const countryApiService = new CountryApiService();

function onSearch(event) {
  if (!event.target.value) {
    clear();
    return;
  }
  clear();
  countryApiService.country = event.target.value.trim();
  countryApiService.fetchCountry().then(renderCountryCard);
}

function renderCountryCard(country) {
  refs.cardContainer.insertAdjacentHTML('beforeend', countryCardTpl(country));
}

refs.inputSearch.addEventListener('input', debounce(onSearch, 500));

function clear() {
  refs.cardContainer.innerHTML = '';
}
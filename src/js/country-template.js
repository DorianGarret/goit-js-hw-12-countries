import CountryApiService from './api/countryApiService';

import countryListTpl from '../handlebars/country-list.hbs';
import countryCardTpl from '../handlebars/country-card.hbs';

import { debounce } from 'lodash';
import { refs } from './refs';
import { notify } from './notification/notification';

const countryApiService = new CountryApiService();

refs.inputSearch.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
  if (!event.target.value.trim()) {
    clear();
    return;
  }

  countryApiService.country = event.target.value.trim();

  countryApiService.fetchCountry().then(renderCountryCard);
}

function renderCountryCard(country) {
  if (country.length > 10) {
    notify.ERROR('Too many matches found. Please enter a more specific query!');
    clear();
    return;
  }

  refs.cardContainer.innerHTML = countryListTpl(country);

  if (country.length === 1) {
    refs.cardContainer.innerHTML = countryCardTpl(country);
  }
}

function clear() {
  refs.cardContainer.innerHTML = '';
}

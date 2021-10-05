export default class CountryApiService {
  constructor() {
    this.searchCountry = '';
  }

  fetchCountry() {
    const url = `https://restcountries.com/v2/name/${this.searchCountry}`;
    return fetch(url).then(res => res.json());
  }

  get country() {
    return this.searchCountry;
  }

  set country(newCountry) {
    this.searchCountry = newCountry;
  }
}

const data = require('../data/countries.json');

function getCountries() {
  return data;
}

function getCountryByCode(code) {
  return data.find(c => c.code === code);
}

module.exports = {
  getCountries,
  getCountryByCode,
};
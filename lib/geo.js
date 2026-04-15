const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data');

function getStates(countryCode) {
  try {
    return require(`${DATA_PATH}/${countryCode}/states.json`);
  } catch {
    return [];
  }
}

function getCities(countryCode, stateCode) {
  try {
    const cities = require(`${DATA_PATH}/${countryCode}/cities.json`);
    return cities.filter(c => c.state_code === stateCode);
  } catch {
    return [];
  }
}

function getCitiesByCountry(countryCode) {
  try {
    return require(`${DATA_PATH}/${countryCode}/cities.json`);
  } catch {
    return [];
  }
}

function getCity(countryCode, cityName) {
  try {
    const cities = require(`${DATA_PATH}/${countryCode}/cities.json`);

    return cities.find(
      (c) => c.name?.toLowerCase() === cityName?.toLowerCase()
    ) || null;
  } catch {
    return null;
  }
}

module.exports = {
  getStates,
  getCities,
  getCitiesByCountry,
  getCity,
};
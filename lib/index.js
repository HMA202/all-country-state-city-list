const countries = require('./countries');
const geo = require('./geo');

module.exports = {
  ...countries,
  ...geo,
};
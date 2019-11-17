const fastn = require('fastn')({
  text: require('fastn/textComponent'),
  list: require('fastn/listComponent'),
  templater: require('fastn/templaterComponent'),
  _generic: require('fastn/genericComponent')
});

const app = require('./app')(fastn.Model);
require('./ui')(fastn, app);

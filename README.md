# 🌍 All Country State City List

> ⚡ The fastest and most complete country, state & city dataset for Node.js with multilingual support (i18n)

![npm](https://img.shields.io/npm/v/all-country-state-city-list)
![downloads](https://img.shields.io/npm/dw/all-country-state-city-list)
![license](https://img.shields.io/npm/l/all-country-state-city-list)

---

## 🚀 Features

- 🌍 250+ Countries
- 🏛️ States & Provinces
- 🏙️ Cities Database
- 🌐 Multi-language support (18+ languages)
- ⚡ Ultra-fast JSON access
- 📦 Fully offline (no API required)
- 🔌 Works with Node.js / React / Flutter backend

---

## 📦 Installation

```bash
npm install all-country-state-city-list
```
---
## 🚀 Usage

### 📦 Import Library

```js
const geo = require('all-country-state-city-list');
```

🌍 Get All Countries
```js
const countries = geo.getCountries();

console.log(countries);
```

🏛️ Get States by Country Code
```js
const states = geo.getStates('BH'); //Bahrain

console.log(states);
```


🏙️ Get Cities by Country
```js
const cities = geo.getCities('BH');

console.log(cities);
```
🔎 Get Cities by State (Advanced)

```js
const cities = geo.getCities('BH', 'Manama');

console.log(cities);

```
📍 Get Single City
```js
const city = geo.getCity('AD', 'Andorra la Vella');

console.log(city.name);
```

🌐 Multilingual Support (i18n)

```js
console.log(city.translations.ar); // العربية (المنامة)
console.log(city.translations.fr); // French (Manama)
console.log(city.translations.ja); // Japanese (マナーマ)
console.log(city.translations.ko); // Korean (마나마)
console.log(city.translations.fa); // Persian / Farsi (منامه)
console.log(city.translations["zh-CN"]); // Chinese (马纳马)
console.log(city.translations.hi); //Hindi (मनामा)
```

 "br": "Manama",
      "ko": "마나마",
      "pt-BR": "Manama",
      "pt": "Manama",
      "nl": "Manama",
      "hr": "Manama",
      "fa": "منامه",
      "de": "Manama",
      "es": "Manama",
      "fr": "Manama",
      "ja": "マナーマ",
      "it": "Manama",
      "zh-CN": "马纳马",
      "tr": "Manama",
      "ru": "Манама",
      "uk": "Манама",
      "pl": "Manama",
      "ar": "المنامة",
      "hi": "मनामा"
---
## 👨‍💻 Author

<p align="center">
  <img 
    src="https://github.com/HMA202.png" 
    width="60" 
    height="60" 
    style="border-radius: 50%;" 
  />
</p>

<p align="center">
  <b>Habib Mohammed</b>
</p>

<p align="center">
  <a href="https://github.com/HMA202">GitHub</a> •
  <a href="https://www.npmjs.com/~habib20298">NPM</a>
</p>
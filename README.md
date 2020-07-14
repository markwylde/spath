# Spath

Capture anchor clicks and do a pushState instead of navigating

## Example

[Demo app](https://spath.onrender.com)

## Why

Most SPA's need to capture default anchor behaviour and do a pushState, this module encaptulates that logic.

## Getting started

```bash
npm i --save spath
```

### Exposes individually or wrapped

```js
const pushStateAnchors = require('spath/pushStateAnchors')
const setPath = require('spath/setPath')

/* Capture all anchor clicks and instead to a pushState */
document.addEventListener('click', pushStateAnchors())

/* Custom capture logic */
document.addEventListener('click', pushStateAnchors(href => {
  return href.startsWith(window.location.origin)
}))

/* To programmatically pushState */
setPath('/some-path')
```

## Detecting path change

[on-url-change](https://www.npmjs.com/package/on-url-change) can be used to detect when the page's URL has changed.

## Developing

```bash
git clone git@github.com:markwylde/spath.git
cd spath
npm install
npm run start
```

Then goto:
http://localhost:8080

## License
This project is licensed under the terms of the MIT license.

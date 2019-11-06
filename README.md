# Routering

Capture anchor clicks and do a pushState instead of navigating

## Example

[Demo app](https://routering.render.com)

## Why

most SPA's need to capture default anchor behaviour and do a pushState, this module encaptulates that logic.

## Getting started

```bash
npm i --save routering
```

```js
const routering = require('routering')

/* Capture all anchor clicks and instead to a pushState */
document.addEventListener('click', routering.pushStateAnchors)

/* To programmatically pushState */
routering.setPath('/some-path')
```

## Detecting path change

[on-url-change](https://www.npmjs.com/package/on-url-change) can be used to detect when the page's URL has changed.

## Developing

```bash
git clone git@github.com:markwylde/routering.git
cd routering
npm install
npm run start
```

Then goto:
http://localhost:8080

## License
This project is licensed under the terms of the MIT license.

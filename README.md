# Routering
This is a simple, zero dependancy, routing library that can be used with fastn to map the page location to a specific component.

## Getting started
Clone this repo and run the example:

```bash
git clone git@github.com:markwylde/routering.git
cd routering
npm install
npm run start
```

Then goto:
http://localhost:8080

## Usage
Install the library
```bash
npm i --save routering
```

Activate the router

```javascript
const routeModule = require('routering')
routeModule({
  defaultRoute: '/'
}, route => {
  // This will be called anytime the route changes
  fastn.Model.set(state, 'route', route)
})
```

Define your route templater

```javascript
const ui = fastn('templater', {
  data: fastn.binding('route'),
  attachTemplates: false,
  template: function (data) {
    const route = data.get('item')

    switch (route) {
      case '/':
        return homePage()

      case '/second':
        return secondPage()

      case '/third':
        return thirdPage()
  
      default:
        return notFoundPage()
    }
  }
})
```

## License
This project is licensed under the terms of the MIT license.

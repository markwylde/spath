const fastn = require('fastn')({
  text: require('fastn/textComponent'),
  list: require('fastn/listComponent'),
  templater: require('fastn/templaterComponent'),
  _generic: require('fastn/genericComponent')
})

const routeModule = require('../lib/index')

const state = {
  route: window.location.pathname
}

routeModule({
  defaultRoute: '/'
}, route => {
  fastn.Model.set(state, 'route', route)
})

const links = () => fastn('ul', {class: 'menu'},
  fastn('li', fastn('a', {href: '/'}, 'Home')),
  fastn('li', fastn('a', {href: '/second'}, 'Second')),
  fastn('li', fastn('a', {href: '/third'}, 'Third')),
)

const homePage = () => fastn('section', 
  links(),
  fastn('h1', 'Home Page'),
  fastn('p', 
    'This is an example of using the router'
  )
)

const secondPage = () => fastn('section', 
  links(),
  fastn('h1', 'Second Page'),
  fastn('p', 
    'This is the second page'
  )
)

const thirdPage = () => fastn('section', 
  links(), 
  fastn('h1', 'Third Page'),
  fastn('p', 
    'This is the third page'
  )
)

const notFoundPage = () => fastn('section', links(), 'Not Found')

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

ui.attach(state)
ui.render()

window.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(ui.element)
})

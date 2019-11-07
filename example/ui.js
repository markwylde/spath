const spath = require('../lib/index')

module.exports = function(fastn, state){
  const setPath = spath.setPath
  document.addEventListener('click', spath.pushStateAnchors)

  const isActive = (test) =>
    fastn.binding('route', route => route === test && 'active')

  const links = () => fastn('ul', { class: 'menu' },
    fastn('li', { class: isActive('/') },
      fastn('a', { href: '/' }, 'Home')),

    fastn('li', { class: isActive('/second') },
      fastn('a', { href: '/second' }, 'Second')),

    fastn('li', { class: isActive('/third') },
      fastn('a', { href: '/third' }, 'Third')),

    fastn('li', { class: isActive('/missing') },
      fastn('a', { href: '/missing' }, 'Missing'))
  )

  const homePage = () => fastn('section',
    fastn('h1', 'Home Page'),
    fastn('p',
      'This is an example of using the router'
    )
  )

  const secondPage = () => fastn('section',
    fastn('h1', 'Second Page'),
    fastn('p',
      'This is the second page'
    )
  )

  const thirdPage = () => fastn('section',
    fastn('h1', 'Third Page'),
    fastn('p',
      'This is the third page, it will navigate home after 3 seconds'
    )
    .on('render', function(){
      setTimeout(() => {
        if(this.element){
          setPath('/')
        }
      }, 3000)
    })
  )

  const notFoundPage = () => fastn('section', 'Not Found')

  const pagesUi = () => fastn('templater', {
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

  const ui = fastn('div',
    links(),
    pagesUi()
  )


  ui.attach(state)
  ui.render()

  window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(ui.element)
  })
}

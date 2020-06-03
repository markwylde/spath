const setPath = require('../setPath');
const pushStateAnchors = require('../pushStateAnchors');

module.exports = function (fastn, state) {
  setPath(window.location.pathname);

  document.addEventListener('click', pushStateAnchors);

  const isActive = (test) =>
    fastn.binding('route', route => route === test && 'active');

  const links = () => fastn('ul', { class: 'menu' },
    fastn('li', { class: isActive('/') },
      fastn('a', { href: '/' }, 'Home')),

    fastn('li', { class: isActive('/second') },
      fastn('a', { href: '/second' }, 'Second')),

    fastn('li', { class: isActive('/third') },
      fastn('a', { href: '/third' }, 'Third')),

    fastn('li',
      fastn('a', { href: 'javascript:alert("hey there")' }, 'JS Test')),

    fastn('li',
      fastn('a', {
        href: window.history.state && window.history.state.previousHref,
        display: window.history.state
      }, 'Back')
        .on('click', (event) => {
          if (!event.metaKey && !event.controlKey) {
            event.preventDefault();
            global.window.history.back();
          }
        })
    ),

    fastn('li', { class: isActive('/nested') },
      fastn('a', { href: '/nested' },
        fastn('span', 'Nested'))),

    fastn('li', { class: isActive('/missing') },
      fastn('a', { href: '/missing' }, 'Missing'))
  );

  const homePage = () => fastn('section',
    fastn('h1', 'Home Page'),
    fastn('p',
      'This is an example of using the router.'
    )
  );

  const secondPage = () => fastn('section',
    fastn('h1', 'Second Page'),
    fastn('p',
      'This is the second page.'
    )
  );

  const thirdPage = () => fastn('section',
    fastn('h1', 'Third Page'),
    fastn('p',
      'This is the third page, it will navigate home after 3 seconds.'
    )
      .on('render', function () {
        setTimeout(() => {
          if (this.element) {
            setPath('/');
          }
        }, 3000);
      })
  );

  const nestedPage = () => fastn('section',
    fastn('h1', 'Nested Link Page'),
    fastn('p',
      'This is the nested link page. It\'s link content is nested in a span.'
    )
  );

  const notFoundPage = () => fastn('section', 'Not Found');

  const pagesUi = () => fastn('templater', {
    data: fastn.binding('route'),
    attachTemplates: false,
    template: function (data) {
      const route = data.get('item');

      switch (route) {
        case '/':
          return fastn('div', links(), homePage());

        case '/second':
          return fastn('div', links(), secondPage());

        case '/third':
          return fastn('div', links(), thirdPage());

        case '/nested':
          return fastn('div', links(), nestedPage());

        default:
          return fastn('div', links(), notFoundPage());
      }
    }
  });

  const ui = fastn('div',
    pagesUi()
  );

  ui.attach(state);
  ui.render();

  window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(ui.element);
  });
};

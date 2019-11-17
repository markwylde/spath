const setPath = require('./setPath');

function pushStateAnchors (event) {
  const href = event.target.getAttribute('href');

  if (href && !href.match(/.*?\/\//)) {
    event.preventDefault();
    setPath(href);
  }
}

module.exports = pushStateAnchors;

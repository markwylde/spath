const setPath = require('./setPath');

function defaultShouldCapture (href) {
  return !href.match(/.*?\/\//);
}

function pushStateAnchors (shouldCapture = defaultShouldCapture) {
  return (event) => {
    const closestAnchor = event.target.closest('a');
    if (!closestAnchor) {
      return;
    }

    const href = closestAnchor.getAttribute('href');
    const isTarget = closestAnchor && closestAnchor.getAttribute('target');
    if (href && !isTarget && !href.match(/^javascript:/) && shouldCapture(href)) {
      event.preventDefault();
      setPath(href);
    }
  };
}

module.exports = pushStateAnchors;

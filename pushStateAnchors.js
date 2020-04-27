const setPath = require('./setPath');

function pushStateAnchors (event) {
  const closestAnchor = event.target.closest('a');
  if (!closestAnchor) {
    return
  }

  const href = closestAnchor.getAttribute('href');
  
  if (href && !href.match(/.*?\/\//)) {
    event.preventDefault();
    alert('yes')
  }
}

module.exports = pushStateAnchors;

function setPath (path) {
  const state = {
    previousHref: window.location.href
  };

  if (path !== window.location.pathname) {
    window.history.pushState(state, document.title, path);
  } else {
    window.history.replaceState(state, document.title, path);
  }
}

module.exports = setPath;

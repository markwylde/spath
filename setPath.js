function setPath (path) {
  if (path !== window.location.pathname) {
    window.history.pushState({
      previousHref: window.location.href,
      path
    }, document.title, path);
  }
}

module.exports = setPath;

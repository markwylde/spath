function setPath (path) {
  if (path !== window.location.pathname) {
    window.history.pushState({ path }, document.title, path);
  }
}

module.exports = setPath;

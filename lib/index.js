function setPath(path){
    if(path !== window.location.pathname){
      window.history.pushState({ path }, document.title, path)
    }
}

function pushStateAnchors(event) {
    const href = event.target.getAttribute('href')

    if (href && !href.match(/.*?\/\//)) {
      event.preventDefault()
      setPath(href)
    }
}

module.exports = {
  setPath,
  pushStateAnchors
}

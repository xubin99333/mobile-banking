export default option => {
  if (option.passData) {
    sessionStorage.setItem('/www/' + option.url, JSON.stringify(option.passData))
  }

  let url = option.url
  if (url.indexOf('?') !== -1) {
    url += '&lang=' + window.defaultLanguage
  } else {
    url += '?lang=' + window.defaultLanguage
  }
  window.location.href = url
}
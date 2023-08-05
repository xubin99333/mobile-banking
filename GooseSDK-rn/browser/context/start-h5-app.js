import packagesInfo from '../../../package-offline.json'

export default (option) => {
  const appId = option.appId
  const destUrl = option.param ? option.param.url : ''

  let url = `${window.location.protocol}//${window.location.host}`

  for (let i in packagesInfo) {
    if (packagesInfo[i].packageid == appId) {
      if (destUrl) {
        url += `${destUrl.substr(4)}`
      } else {
        url += `${packagesInfo[i].url.substr(4)}`
      }

      break
    }
  }

  let data = option.param
  delete data.url

  if (Object.keys(data).length > 0) {
    sessionStorage.setItem(destUrl, JSON.stringify(data))
  }
  
  window.location.href = url
}

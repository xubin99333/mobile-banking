export default option => {
  if (option) {
    for (let i in option) {
      sessionStorage.setItem(i, option[i])
    }
  }
  window.history.go(-1)
}

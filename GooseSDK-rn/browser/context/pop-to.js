export default option => {
  let { index } = option
    if (index) {
      window.history.go(index)
    } else {
      window.history.go(-1)
    }
}

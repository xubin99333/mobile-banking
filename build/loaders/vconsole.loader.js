/**
 * @author: 孟庆云
 * @description: 根据node的环境变量，如果是production，需要去掉vconsole的内容
 */
module.exports = function() {
  let source = `
    import Vue from 'vue'
    import Vconsole from 'vconsole'
    const vConsole = new Vconsole()
    Vue.use(vConsole)
  `

  return source
}

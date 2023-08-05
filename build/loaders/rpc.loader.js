/**
 * @description 通过代理连接网关loader
 */
const fs = require('fs'),
  path = require('path')
  
module.exports = function() {
  return fs.readFileSync(path.resolve(__dirname, '../../src/assets/js/rpc-browser.js'), { encoding: 'UTF-8' })
}

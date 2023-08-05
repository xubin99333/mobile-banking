/**
 * @description Mock服务的loader
 */
const fs = require('fs'),
  path = require('path')

module.exports = function() {
  return fs.readFileSync(path.resolve(__dirname, '../../src/assets/js/rpc-mock.js'), { encoding: 'UTF-8' })
}

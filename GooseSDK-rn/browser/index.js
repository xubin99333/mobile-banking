import os from './os'
import context from './context'
import storage from './storage'
import tools from './tools'
import ui from './ui'
import event from './event/eventListener'
import native from './native'
const packageInfo = require('../../package.json')

const gooseSDK = {};
gooseSDK.version = packageInfo.version
//获取操作系统相关的信息
gooseSDK.os = os();
gooseSDK.context = context; //注入上下文模块
gooseSDK.storage = storage; //注入上下文模块
gooseSDK.tools = tools; //注入上下文模块
gooseSDK.ui = ui; //注入上下文模块
gooseSDK.on = event; //注入上下文模块
gooseSDK.native = native; //注入上下文模块

window.GooseSDK = gooseSDK
export default GooseSDK;

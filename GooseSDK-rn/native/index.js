import bridge from './bridge'
import os from './os'
import context from './context'
import storage from './storage'
import tools from './tools'
import ui from './ui'
import event from './event/eventListener'
import native from './native'
const packageInfo = require('../../package.json')

const GooseSDK = {};
GooseSDK.version = packageInfo.version
GooseSDK.bridge = bridge;
//获取操作系统相关的信息
GooseSDK.os = os();
GooseSDK.context = context; //注入上下文模块
GooseSDK.storage = storage; //注入上下文模块
GooseSDK.tools = tools; //注入上下文模块
GooseSDK.ui = ui; //注入上下文模块
GooseSDK.on = event; //注入上下文模块
GooseSDK.native = native; //注入上下文模块

export default GooseSDK;

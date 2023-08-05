import startH5App from './context/start-h5-app'
import pushWindow from './context/push-window'
import GooseSDK from '../native/index'

GooseSDK.context.startH5App = startH5App
GooseSDK.context.pushWindow = pushWindow

window.GooseSDK = GooseSDK

export default GooseSDK

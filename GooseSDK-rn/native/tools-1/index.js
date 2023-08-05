import getStartupParams from './get-startup-params'
import getDeviceInfo from './get-device-info'
import getOfflinePackageInformation from './get-offline-package-information'
import setAPPDataStorage from './set-app-data-storage'
import getAPPDataStorage from './get-app-data-storage'
import removeAPPDataStorage from './remove-app-data-storage'
import setAPPDataCache from './set-app-data-cache'
import getAPPDataCache from './get-app-data-cache'
import removeAPPDataCache from './remove-app-data-cache'
import location from './location'
import chooseImage from './choose-image'
import takePhoto from './take-photo' 
import selectPhoto from './select-photo' 
import share from './share' 
import setGestureLock from './set-gesture-lock' 
import decryptLock from './decrypt-lock' 
import resetGestureLock from './reset-gesture-lock' 
import rpc from './rpc' 
import userBind from './user-bind' 
import userUnBind from './user-un-bind' 
import getContacts from './get-contacts' 
import setRightOptionMenu from './set-right-option-menu'
import setLeftOptionMenu from './set-left-option-menu'
import setTitleClick from './set-title-click'
import setSubtitleClick from './set-subtitle-click'

let tools = {
  getStartupParams,
  getDeviceInfo,
  getOfflinePackageInformation,
  setAPPDataStorage,
  getAPPDataStorage,
  removeAPPDataStorage,
  setAPPDataCache,
  getAPPDataCache,
  removeAPPDataCache,
  location,
  chooseImage,
  takePhoto,
  selectPhoto,
  share,
  setGestureLock,
  decryptLock,
  resetGestureLock,
  rpc,
  userBind,
  userUnBind,
  getContacts,
  setRightOptionMenu,
  setLeftOptionMenu,
  setTitleClick,
  setSubtitleClick
}

export default tools;
import scan from './scan'
import isSensorAvailable from './is-sensor-available'
import biometricsCreateKeys from './biometrics-create-keys'
import biometricsDeleteKeys from './biometrics-delete-keys'
import biometricCreateSignature from './biometric-create-signature'
import biometricKeysExist from './biometric-keys-exist'

let native = {
  scan,
  isSensorAvailable,
  biometricsCreateKeys,
  biometricsDeleteKeys,
  biometricCreateSignature,
  biometricKeysExist,
}

export default native;

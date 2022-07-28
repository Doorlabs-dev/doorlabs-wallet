import { Alert } from 'react-native';
import { atom, useRecoilState } from 'recoil';
import * as LocalAuthentication from 'expo-local-authentication';

export const biometricsRequiredState = atom({
  key: 'biometricsState',
  default: true,
});

type UseBiometrics = {
  biometricsRequired: boolean;
  setBiometricsRequired: (required: boolean) => void;
  authenticateBiometrics: () => Promise<void>;
};

const useBiometrics = (): UseBiometrics => {
  const [biometricsRequired, setBiometricsRequired] = useRecoilState(
    biometricsRequiredState
  );

  const authenticateBiometrics = async () => {
    const result = await LocalAuthentication.authenticateAsync();

    if (result.success) {
      Alert.alert('Sucessfully authenticated');
      setBiometricsRequired(false);
    } else {
      Alert.alert('Fail authentication');
      setBiometricsRequired(false);
    }
  };

  return {
    biometricsRequired,
    setBiometricsRequired,
    authenticateBiometrics,
  };
};

export default useBiometrics;

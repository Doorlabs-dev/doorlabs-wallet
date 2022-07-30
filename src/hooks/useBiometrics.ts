import { Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';

type UseBiometrics = {
  isBiometricsAvailable: boolean;
  authenticateBiometrics: (onSuccess?: () => void) => Promise<void>;
  checkAvailable: () => Promise<boolean>;
};

const useBiometrics = (): UseBiometrics => {
  const [isBiometricsAvailable, setIsBiometricsAvailable] = useState(false);

  useEffect(() => {
    checkAvailable().then(setIsBiometricsAvailable);
  }, []);

  const checkAvailable = async () => {
    const isHardwareAvailable = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    return isHardwareAvailable && isEnrolled;
  };

  const authenticateBiometrics = async (onSuccess?: () => void) => {
    const result = await LocalAuthentication.authenticateAsync();

    if (result.success) {
      Alert.alert('Sucessfully authenticated');
      onSuccess?.();
    } else {
      Alert.alert('Fail authentication');
    }
  };

  return {
    isBiometricsAvailable,
    authenticateBiometrics,
    checkAvailable,
  };
};

export default useBiometrics;

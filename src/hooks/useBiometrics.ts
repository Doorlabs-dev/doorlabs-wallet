import { Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import LocalStorage from '@services/store/localstore';

export const biometricsStore = new LocalStorage<boolean>({
  name: 'walletme:usedBiometrics',
  defaultValue: false,
});

type UseBiometrics = {
  isBiometricsAvailable: boolean;
  authenticateBiometrics: () => Promise<boolean>;
  checkAvailable: () => Promise<boolean>;
  supportedTypes: LocalAuthentication.AuthenticationType[];
  getAuthenticationTypeName: () => string;
};

const useBiometrics = (): UseBiometrics => {
  const [isBiometricsAvailable, setIsBiometricsAvailable] = useState(false);
  const [supportedTypes, setSupportedTypes] = useState<
    LocalAuthentication.AuthenticationType[]
  >([]);

  useEffect(() => {
    checkAvailable().then(setIsBiometricsAvailable);
  }, []);

  useEffect(() => {
    if (isBiometricsAvailable) {
      LocalAuthentication.supportedAuthenticationTypesAsync().then((value) => {
        setSupportedTypes(value);
      });
    }
  }, [isBiometricsAvailable]);

  const getAuthenticationTypeName = (): string => {
    return supportedTypes[supportedTypes.length - 1] ===
      LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
      ? 'FaceID'
      : 'Fingerprint/Pass Code';
  };

  const checkAvailable = async () => {
    const isHardwareAvailable = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    return isHardwareAvailable && isEnrolled;
  };

  const authenticateBiometrics = async (): Promise<boolean> => {
    const result = await LocalAuthentication.authenticateAsync();

    return result.success;
  };

  return {
    isBiometricsAvailable,
    supportedTypes,
    authenticateBiometrics,
    checkAvailable,
    getAuthenticationTypeName,
  };
};

export default useBiometrics;

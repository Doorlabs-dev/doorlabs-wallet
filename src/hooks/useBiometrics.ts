import { Alert, Platform } from 'react-native';
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
  getAuthenticationType: () =>
    | LocalAuthentication.AuthenticationType
    | undefined;
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

  const getAuthenticationType = (): LocalAuthentication.AuthenticationType => {
    return supportedTypes[supportedTypes.length - 1];
  };

  const getAuthenticationTypeName = (): string => {
    return supportedTypes[supportedTypes.length - 1] ===
      LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
      ? Platform.OS === 'ios'
        ? 'FaceID'
        : 'Face Recognition'
      : Platform.OS === 'ios'
      ? 'TouchID'
      : 'Fingerprint';
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
    getAuthenticationType,
    getAuthenticationTypeName,
  };
};

export default useBiometrics;

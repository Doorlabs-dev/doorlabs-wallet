import { Linking } from 'react-native';
import { useCallback } from 'react';
import { Camera } from 'react-native-vision-camera';

const useCameraPermission = () => {
  const checkPermission = useCallback(async (): Promise<boolean> => {
    const result = await Camera.getCameraPermissionStatus();

    if (result === 'not-determined') {
      return await requestPermission();
    }

    if (result === 'denied' || result === 'restricted') {
      await Linking.openSettings();
      return false;
    }

    return true;
  }, []);

  const requestPermission = useCallback(async (): Promise<boolean> => {
    const result = await Camera.requestCameraPermission();

    return result === 'authorized';
  }, []);

  return { checkPermission };
};

export default useCameraPermission;

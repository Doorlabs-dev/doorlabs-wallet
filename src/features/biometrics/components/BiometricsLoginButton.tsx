import React, { useEffect, useState } from 'react';
import useBiometrics, { biometricsStore } from '@hooks/useBiometrics';
import { SecondaryButton } from '@components/ui';
import colors from '@styles/colors';

type Props = {
  onSuccess?: () => void;
};

const BiometricsLoginButton = ({ onSuccess }: Props) => {
  const {
    isBiometricsAvailable,
    getAuthenticationTypeName,
    authenticateBiometrics,
  } = useBiometrics();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isBiometricsAvailable) {
      biometricsStore.get().then((enable) => {
        if (enable) setVisible(enable);
      });
    }
  }, [isBiometricsAvailable]);

  if (!visible) return null;

  return (
    <SecondaryButton
      title={`Unlock with ${getAuthenticationTypeName()}`}
      color={colors.white}
      onPress={async () => {
        const success = await authenticateBiometrics();
        if (success) {
          onSuccess?.();
        }
      }}
    />
  );
};

export default BiometricsLoginButton;

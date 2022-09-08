import React, { useEffect, useState } from 'react';
import useBiometrics, { biometricsStore } from '@hooks/useBiometrics';
import { Text } from '@components/ui';
import colors from '@styles/colors';
import { Row, Spacer } from '@components/layout';
import IconFaceID from '@assets/svg/icon_faceid.svg';
import IconTouchID from '@assets/svg/icon_touchid.svg';
import styled from 'styled-components/native';
import { AuthenticationType } from 'expo-local-authentication';

type Props = {
  onSuccess?: () => void;
};

const Button = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
`;

const BiometricsLoginButton = ({ onSuccess }: Props) => {
  const {
    isBiometricsAvailable,
    getAuthenticationTypeName,
    getAuthenticationType,
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
    <Button
      onPress={async () => {
        const success = await authenticateBiometrics();
        if (success) {
          onSuccess?.();
        }
      }}
    >
      <Row alignItems="center">
        {getAuthenticationType() === AuthenticationType.FACIAL_RECOGNITION ? (
          <IconFaceID />
        ) : (
          <IconTouchID />
        )}
        <Spacer width={16} />
        <Text size={16} weight={500} color={colors.white}>
          Unlock with {getAuthenticationTypeName()}
        </Text>
      </Row>
    </Button>
  );
};

export default BiometricsLoginButton;

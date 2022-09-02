import React from 'react';
import { Row } from '../../../components/layout';
import Text from '../../../components/ui/Text';
import * as LocalAuthentication from 'expo-local-authentication';
import { Switch, View } from 'react-native';
import colors from '@styles/colors';

type Props = {
  enabled?: boolean;
  onChange?: (enabled: boolean) => void;
  supportedTypes: LocalAuthentication.AuthenticationType[];
};

const BiometricsEnableSwitch = ({
  enabled = false,
  onChange = (value) => null,
  supportedTypes,
}: Props) => {
  if (!supportedTypes.length) return null;

  const authType =
    supportedTypes[supportedTypes.length - 1] ===
    LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
      ? 'FaceID'
      : 'Fingerprint/Pass Code';

  return (
    <View style={{ width: '100%' }}>
      <Row justifyContent="space-between" alignItems="center">
        <Text size={16} color={colors.white}>
          Unlock with {authType}
        </Text>
        <Switch value={enabled} onValueChange={onChange} />
      </Row>
    </View>
  );
};

export default BiometricsEnableSwitch;

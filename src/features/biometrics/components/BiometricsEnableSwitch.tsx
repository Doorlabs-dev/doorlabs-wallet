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
  authType: string;
  textSize?: number;
};

const BiometricsEnableSwitch = ({
  enabled = false,
  onChange = (value) => null,
  supportedTypes = [],
  authType,
  textSize,
}: Props) => {
  if (!supportedTypes.length) return null;

  return (
    <View style={{ width: '100%' }}>
      <Row justifyContent="space-between" alignItems="center">
        <Text size={textSize || 16} color={colors.white}>
          Unlock with {authType}
        </Text>
        <Switch value={enabled} onValueChange={onChange} />
      </Row>
    </View>
  );
};

export default BiometricsEnableSwitch;

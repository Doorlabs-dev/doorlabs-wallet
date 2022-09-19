import React from 'react';
import { Text } from '@components/ui';
import useCheckPhraseVerified from '@features/recovery/hooks/useCheckPhraseVerified';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import { Row, Spacer } from '@components/layout';
import { View } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import ScreenNames from '@router/screenNames';
import { ScreenNavigationProps } from '@router/navigation-props';
import { VerifySeedPhraseScreenParams } from '../VerifySeedPhraseScreen';
import useVerifyPhraseEmitter from '@features/recovery/hooks/useVerifyPhraseEmitter';

const ICON_CLOSE = require('@assets/images/icon_close.png');

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: #565fe2;
  padding: 24px 16px;
  border-radius: 12px;
`;

const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;

const VerifyPhraseReminder = () => {
  const { isPhraseVerified } = useCheckPhraseVerified();
  const navigation =
    useNavigation<ScreenNavigationProps<VerifySeedPhraseScreenParams>>();

  const backToHome = () => {
    navigation.dispatch(StackActions.pop());
  };

  const navigateToVerifyPhrase = () => {
    navigation.navigate({
      name: ScreenNames.RECOVERY_VERIFY_PHRASE,
    });
  };

  useVerifyPhraseEmitter({
    onPhraseVerifiedSuccess: backToHome,
    onSkipVerifyPhrase: backToHome,
  });

  if (isPhraseVerified) return null;

  return (
    <>
      <Container activeOpacity={0.8} onPress={navigateToVerifyPhrase}>
        <Row alignItems="center">
          <Icon source={ICON_CLOSE} />
          <Spacer width={16} />
          <View>
            <Text lineHeight={24} size={16} weight={500} color={colors.white}>
              Set up account recovery
            </Text>
            <Text lineHeight={24} size={16}>
              Click here to secure your assets
            </Text>
          </View>
        </Row>
      </Container>
      <Spacer height={24} />
    </>
  );
};

export default VerifyPhraseReminder;

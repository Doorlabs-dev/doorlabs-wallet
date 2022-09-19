import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Container, Row, SafeArea, Spacer } from '@components/layout';
import styled from 'styled-components/native';
import { PrimaryButton, Text } from '@components/ui';
import colors from '@styles/colors';
import IconInfo from '@assets/svg/icon_info.svg';
import PhraseExplainPopup from '../components/PhraseExplainPopup';
import useModal from '@hooks/useModal';
import SecurityImportantExplainPopup from '../components/SecurityImportantExplainPopup';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';
import { VerifySeedPhraseScreenParams } from '@features/recovery/screen/VerifySeedPhraseScreen';
import useAuthentication from '@features/auth/hooks/useAuthentication';
import useVerifyPhraseEmitter from '@features/recovery/hooks/useVerifyPhraseEmitter';

type Props = {};

const Image = styled.Image`
  width: 140px;
  height: 140px;
`;

const SecureWalletScreen = (props: Props) => {
  const {
    visible: phraseModalVisible,
    open: openPhraseModal,
    close: closePhraseModal,
  } = useModal();
  const {
    visible: explainModalVisible,
    open: openExplainModal,
    close: closeExplainModal,
  } = useModal();
  const navigation =
    useNavigation<ScreenNavigationProps<VerifySeedPhraseScreenParams>>();
  const { setIsAccountAvailable, setIsAuthenticated } = useAuthentication();

  const goToApp = () => {
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsAccountAvailable(true);
    }, 500);
  };

  useVerifyPhraseEmitter({
    onPhraseVerifiedSuccess: goToApp,
    onSkipVerifyPhrase: goToApp,
  });

  return (
    <SafeArea>
      <Spacer height={40} />
      <Container center={false} alignItems="center">
        <Text color={colors.white} size={28} lineHeight={38} weight={700}>
          Secure your wallet
        </Text>
        <Spacer height={24} />
        <Image
          source={require('@assets/images/onboarding/secure_wallet.png')}
        />
        <Spacer height={24} />
        <Row alignItems="center">
          <Text size={16} lineHeight={24}>
            Secure your wallet's
          </Text>
          <Spacer width={7} />
          <TouchableOpacity onPress={() => openPhraseModal()}>
            <Text size={16} lineHeight={24} color={colors.blue}>
              Secret Recovery Phrase
            </Text>
          </TouchableOpacity>
        </Row>
        <Spacer height={8} />
        <Row alignItems="center">
          <IconInfo />
          <Spacer width={8} />
          <TouchableOpacity onPress={() => openExplainModal()}>
            <Text size={16} lineHeight={24} color={colors.blue}>
              Why is it important ?
            </Text>
          </TouchableOpacity>
        </Row>
        <View style={{ flex: 1 }} />
        <PrimaryButton
          label="Start"
          onPress={() =>
            navigation.navigate({
              name: ScreenNames.RECOVERY_VERIFY_PHRASE,
            })
          }
        />
        <Spacer height={34} />
      </Container>
      <PhraseExplainPopup
        visible={phraseModalVisible}
        onClose={closePhraseModal}
      />
      <SecurityImportantExplainPopup
        visible={explainModalVisible}
        onClose={closeExplainModal}
      />
    </SafeArea>
  );
};

export default SecureWalletScreen;

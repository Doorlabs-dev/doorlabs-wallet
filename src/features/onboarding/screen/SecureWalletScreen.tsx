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
        <PrimaryButton label="Start" onPress={() => {}} />
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

import React, { Fragment, useEffect, useState } from 'react';
import Toast from 'react-native-root-toast';
import { ActivityIndicator } from 'react-native';
import { Container, Row, Spacer } from '../../../components/layout';
import { PrimaryButton, Text } from '../../../components/ui';
import wallet from '../../../services/wallet';
import { colors } from '../../../styles';
import * as Clipboard from 'expo-clipboard';
import { PasswordValidationForm } from '@components/form';
import styled from 'styled-components/native';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';

const PhraseContainer = styled.View`
  background-color: ${colors.greyScale700};
  padding: 12px 41px 12px 16px;
  border-radius: 8px;
`;

const GetSeedPhraseScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState('');
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (passed) {
      getRecoveryPhrase();
    }
  }, [passed]);

  const getRecoveryPhrase = async () => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        const phrase = await wallet.getSeedPhrase();
        setPhrase(phrase || '');

        setIsLoading(false);
      }, 0);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onCopy = async () => {
    if (phrase) {
      await Clipboard.setStringAsync(phrase);
      Toast.show('Copied');
    }
  };

  if (!passed) {
    return (
      <Container center={false} alignItems="center">
        <AndroidHeaderFix />
        <PasswordValidationForm onPass={() => setPassed(true)} />
      </Container>
    );
  }

  return (
    <Container center={false}>
      <AndroidHeaderFix />
      {isLoading ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <>
          <Text size={16} lineHeight={24}>
            Typically 12 words separated by single spaces
          </Text>
          <Spacer height={16} />
          <PhraseContainer>
            {phrase.split('/s').map((word) => (
              <Fragment key={word}>
                <Row>
                  <Text size={18} lineHeight={36} weight={500}>
                    {word}
                  </Text>
                </Row>
              </Fragment>
            ))}
          </PhraseContainer>
          <Spacer height={24} />
          <PrimaryButton label="Copy to clipboard" onPress={onCopy} />
        </>
      )}
    </Container>
  );
};

export default GetSeedPhraseScreen;

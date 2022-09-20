import React, { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { Container, Row, Spacer } from '../../../components/layout';
import { PrimaryButton, SecondaryButton, Text } from '../../../components/ui';
import wallet from '../../../services/wallet';
import { colors } from '../../../styles';
import styled from 'styled-components/native';
import { BlurView as RNBlurView } from '@react-native-community/blur';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import { TextInput } from '@components/form';
import { FieldValues, useForm } from 'react-hook-form';
import useModal from '@hooks/useModal';
import SkipVerifyPhrasePopup from './components/SkipVerifyPhrasePopup';
import Toast from 'react-native-root-toast';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';
import useCheckPhraseVerified from '../hooks/useCheckPhraseVerified';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  notifyPhraseVerifiedSuccess,
  notifySkipVerifyPhrase,
} from '../hooks/useVerifyPhraseEmitter';

const PhraseContainer = styled.View`
  background-color: ${colors.greyScale700};
  padding: 12px 41px 12px 16px;
  border-radius: 8px;
`;

const BlurView = styled(RNBlurView)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 8px;
`;

type VerifyPhraseScreenMode = 'display' | 'verify';

type ParamsList = {
  'verify-phrase': VerifySeedPhraseScreenParams;
};

export type VerifySeedPhraseScreenParams = {
  mode?: VerifyPhraseScreenMode;
};

const VerifySeedPhraseScreen = () => {
  const insets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(true);
  const [phrase, setPhrase] = useState('');
  const [isRevealed, setIsisRevealed] = useState(false);
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const route = useRoute<RouteProp<ParamsList, 'verify-phrase'>>();
  const { mode: screenMode } = route?.params || {};
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      input_phrase: '',
    },
  });
  const { visible, close, open } = useModal();
  const { updatePhraseIsVerified } = useCheckPhraseVerified();

  const skip = () => {
    close();
    setTimeout(() => {
      notifySkipVerifyPhrase();
    }, 500);
  };

  const submit = () =>
    handleSubmit(async (values) => {
      if (values.input_phrase === phrase) {
        await updatePhraseIsVerified();
        setTimeout(() => {
          notifyPhraseVerifiedSuccess();
        }, 500);
      } else {
        Toast.show('Invalid phrase', {
          position: Toast.positions.CENTER,
        });
      }
    });

  useLayoutEffect(() => {
    if (screenMode && screenMode === 'verify') {
      navigation.setOptions({ title: 'Verify Recovery Phrase' });
    }
  }, [screenMode]);

  useEffect(() => {
    setTimeout(() => {
      // Prevent skip frames due to heavy getting phrase
      getRecoveryPhrase();
    }, 500);
  }, []);

  const getRecoveryPhrase = async () => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        const result = await wallet.getSeedPhrase();
        if (!result) throw Error('Error get seed phrase');
        setPhrase(result);
        setIsLoading(false);
      }, 0);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (screenMode === 'verify') {
    return (
      <Container center={false}>
        <AndroidHeaderFix />
        <Spacer height={20} />
        <Text size={16} lineHeight={24}>
          Typically 12 (sometimes 24) words separated by single spaces
        </Text>
        <Spacer height={16} />
        <TextInput
          name="input_phrase"
          control={control}
          placeholder="Secret phrase"
          rules={{ required: 'Please input your recovery phrase to verify' }}
          inputProps={{
            multiline: true,
            style: {
              height: 128,
            },
          }}
        />
        <PrimaryButton label="Complete" onPress={submit()} />
        <Container />
        <SecondaryButton title="Remind me later" onPress={() => open()} />
        <Spacer height={insets.bottom} />
        <SkipVerifyPhrasePopup
          onSkip={skip}
          visible={visible}
          onClose={close}
        />
      </Container>
    );
  }

  return (
    <Container center={false}>
      <AndroidHeaderFix />
      <Spacer height={20} />
      {isLoading ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <>
          <Text size={16} lineHeight={24}>
            This is your Secret Recovery Phrase. Write it down on a paper and
            keep it in a safe place. You'll be asked to re-enter this phrase (in
            order) on the next step
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
            {isRevealed ? null : Platform.OS === 'android' ? (
              <BlurView
                reducedTransparencyFallbackColor="black"
                blurAmount={3}
                blurType="light"
                overlayColor={'transparent'}
              />
            ) : (
              <BlurView
                reducedTransparencyFallbackColor="black"
                blurAmount={3}
                blurType="light"
              />
            )}
          </PhraseContainer>
          <Spacer height={24} />
          <PrimaryButton
            label="Next"
            disabled={!isRevealed}
            onPress={() => {
              navigation.setParams({
                mode: 'verify',
              });
            }}
          />
          {!isRevealed && (
            <SecondaryButton
              color={colors.white}
              title="Click to reveal"
              onPress={() => setIsisRevealed(true)}
            />
          )}
          <Container />
          <SecondaryButton title="Remind me later" onPress={() => open()} />
          <Spacer height={insets.bottom} />
        </>
      )}
      <SkipVerifyPhrasePopup onSkip={skip} visible={visible} onClose={close} />
    </Container>
  );
};

export default VerifySeedPhraseScreen;

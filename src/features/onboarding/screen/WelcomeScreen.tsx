import { useNavigation } from '@react-navigation/native';
import colors from '@styles/colors';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, SafeArea, Spacer } from '../../../components/layout';
import { Button, PrimaryButton, Title } from '../../../components/ui';
import { ScreenNavigationProps } from '../../../router/navigation-props';
import ScreenNames from '../../../router/screenNames';

const ONBOARD_LOGO = require('@assets/onboard_logo.png');

const WelcomeScreen = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const navigateToCreatePasswordScreen = () => {
    navigation.navigate({ name: ScreenNames.CREATE_WALLET_PASSWORD });
  };

  const navigateToInputPhraseScreen = () => {
    navigation.navigate({ name: ScreenNames.INPUT_PHRASE });
  };

  return (
    <SafeArea>
      <Container>
        <Spacer height={67} />
        <Image source={ONBOARD_LOGO} />
        <View style={styles.btnGr}>
          <PrimaryButton
            textColor={colors.white}
            label="Create wallet"
            onPress={navigateToCreatePasswordScreen}
          />
          <Button
            color="transparent"
            onPress={navigateToInputPhraseScreen}
            paddingHorizontal={20}
          >
            <Title size={16}>Restore wallet</Title>
          </Button>
        </View>
      </Container>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  btnGr: {
    width: '100%',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 20,
  },
});

export default WelcomeScreen;

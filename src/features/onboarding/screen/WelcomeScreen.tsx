import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Container, Spacer } from "../../../components/layout";
import { Button, Title } from "../../../components/ui";
import { ScreenNavigationProps } from "../../../router/navigation-props";
import ScreenNames from "../../../router/screenNames";

const ONBOARD_LOGO = require("@assets/onboard_logo.png");

const WelcomeScreen = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const navigateToCreatePasswordScreen = () => {
    navigation.navigate({ name: ScreenNames.CREATE_WALLET_PASSWORD });
  };

  const navigateToInputPhraseScreen = () => {
    navigation.navigate({ name: ScreenNames.INPUT_PHRASE });
  };

  return (
    <Container>
      <Image source={ONBOARD_LOGO} />
      <View style={styles.btnGr}>
        <Button width={"100%"} onPress={navigateToCreatePasswordScreen}>
          <Title size={16}>Create wallet</Title>
        </Button>
        <Spacer height={16} />
        <Button
          color="transparent"
          onPress={navigateToInputPhraseScreen}
          paddingHorizontal={20}
        >
          <Title size={16}>Restore wallet</Title>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  btnGr: {
    width: "100%",
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: 20,
  },
});

export default WelcomeScreen;

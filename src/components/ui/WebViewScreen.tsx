import React from 'react';
import Webview from 'react-native-webview';
import { Container, SafeArea } from '@components/layout';
import styled from 'styled-components/native';
import SecondaryButton from './button/SecondaryButton';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import colors from '@styles/colors';
import Text from './Text';

type Props = {};

const Header = styled.View`
  width: 100%;
  height: 48px;
  align-items: flex-start;
`;

const ButtonWrapper = styled.View`
  width: 90px;
`;

type Params = {
  webview: {
    url: string;
  };
};

const WebviewHeader = ({ onPress }: { onPress: () => void }) => (
  <Header>
    <ButtonWrapper>
      <SecondaryButton
        color={colors.white}
        title="Cancel"
        onPress={() => onPress()}
      />
    </ButtonWrapper>
  </Header>
);

const WebViewScreen = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const route = useRoute<RouteProp<Params, 'webview'>>();
  const url = route?.params?.url;

  if (!url)
    return (
      <SafeArea>
        <WebviewHeader onPress={navigation.goBack} />
        <Container>
          <Text>No URL found</Text>
        </Container>
      </SafeArea>
    );

  return (
    <SafeArea>
      <WebviewHeader onPress={navigation.goBack} />
      <Webview containerStyle={{ flex: 1 }} source={{ uri: url }} />
    </SafeArea>
  );
};

export default WebViewScreen;

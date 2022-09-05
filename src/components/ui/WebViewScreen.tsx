import React from 'react';
import Webview from 'react-native-webview';
import { Container, SafeArea } from '@components/layout';
import styled from 'styled-components/native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import Text from './Text';

type Params = {
  webview: {
    url: string;
  };
};

const WebViewScreen = () => {
  const route = useRoute<RouteProp<Params, 'webview'>>();
  const url = route?.params?.url;

  if (!url)
    return (
      <Container>
        <Text>No URL found</Text>
      </Container>
    );

  return <Webview containerStyle={{ flex: 1 }} source={{ uri: url }} />;
};

export default WebViewScreen;

import React from 'react';
import Webview from 'react-native-webview';
import { Container } from '@components/layout';
import { RouteProp, useRoute } from '@react-navigation/native';
import Text from './Text';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';

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

  return (
    <>
      <AndroidHeaderFix />
      <Webview containerStyle={{ flex: 1 }} source={{ uri: url }} />
    </>
  );
};

export default WebViewScreen;

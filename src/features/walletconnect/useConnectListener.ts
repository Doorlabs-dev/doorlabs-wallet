import WalletConnectActionLinkHandler from '@services/walletconnect/walletConnectActionLinkHandler.service';
import * as Linking from 'expo-linking';
import { useEffect, useRef } from 'react';
import { EmitterSubscription } from 'react-native';

const useConnectListener = () => {
  const actionLinkHandler = useRef<
    WalletConnectActionLinkHandler | undefined
  >();
  const linkListener = useRef<EmitterSubscription>();

  const handleActionLink = (url: string) => {
    actionLinkHandler.current?.addAction(url);
  };

  useEffect(() => {
    actionLinkHandler.current = new WalletConnectActionLinkHandler();

    Linking.getInitialURL().then((url) => {
      if (!url) return;
      handleActionLink(url);
    });

    if (linkListener.current) linkListener.current.remove();

    linkListener.current = Linking.addEventListener('url', (res) =>
      handleActionLink(res.url)
    );

    return () => {
      linkListener.current?.remove();
    };
  }, []);
};

export default useConnectListener;

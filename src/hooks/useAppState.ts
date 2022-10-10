import { AppState, NativeEventSubscription } from 'react-native';
import { useEffect, useRef } from 'react';

type Props = {
  onAppActive: () => void;
  onAppBackground: () => void;
};

const useAppState = ({ onAppActive, onAppBackground }: Props) => {
  const appState = useRef(AppState.currentState);
  const subscription = useRef<NativeEventSubscription>();
  useEffect(() => {
    if (subscription.current) {
      subscription.current.remove();
    }

    subscription.current = AppState.addEventListener(
      'change',
      (nextAppState) => {
        if (appState.current.match(/background/) && nextAppState === 'active') {
          onAppActive();
        }

        if (nextAppState.match(/background/)) {
          onAppBackground();
        }

        appState.current = nextAppState;
      }
    );

    return () => {
      if (subscription.current) {
        subscription.current.remove();
      }
    };
  }, [onAppActive, onAppBackground]);
};

export default useAppState;

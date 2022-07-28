import { AppState } from 'react-native';
import { useEffect, useRef } from 'react';

type Props = {
  onAppActive: () => void;
  onAppBackground: () => void;
};

const useAppState = ({ onAppActive, onAppBackground }: Props) => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/background/) && nextAppState === 'active') {
        onAppActive();
      }

      if (nextAppState.match('/background/')) {
        onAppBackground();
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [onAppActive, onAppBackground]);
};

export default useAppState;

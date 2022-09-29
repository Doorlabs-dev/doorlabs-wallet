import { useRef } from 'react';
import useAppState from './useAppState';
import useAuthentication from '@features/auth/hooks/useAuthentication';

const SESSION_DURATION = 30e3; //30s

const useSession = () => {
  const { setIsAuthenticated, isAuthenticated } = useAuthentication();
  const backgroundAt = useRef<number>();

  const lock = () => {
    setIsAuthenticated(false);
  };

  const reset = () => {
    backgroundAt.current = undefined;
  };

  const checkShouldLock = () => {
    if (!backgroundAt.current) return;

    const now = Date.now();
    const sleepTime = now - backgroundAt.current;

    if (sleepTime >= SESSION_DURATION && isAuthenticated) {
      lock();
    }

    reset();
  };

  const saveBackgroundTimeAt = () => {
    backgroundAt.current = Date.now();
  };

  useAppState({
    onAppActive: () => {
      checkShouldLock();
    },
    onAppBackground: () => {
      saveBackgroundTimeAt();
    },
  });
};

export default useSession;

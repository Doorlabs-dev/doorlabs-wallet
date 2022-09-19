import { useEffect, useRef, useState } from 'react';
import LocalStorage from '@services/store/localstore';
import { useIsFocused } from '@react-navigation/native';

export const PHRASE_VERIFIED_KEY = 'walletme:isPhraseVerified';
export const phraseVerifiedStorage = new LocalStorage({
  name: PHRASE_VERIFIED_KEY,
  defaultValue: false,
});

const useCheckPhraseVerified = () => {
  const [isPhraseVerified, setIsPhraseVerified] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function check() {
      const result = await phraseVerifiedStorage.get();
      setIsPhraseVerified(result || false);
    }
    if (isFocused) {
      check();
    }
  }, [isFocused]);

  const updatePhraseIsVerified = async () => {
    setIsPhraseVerified(true);
    await phraseVerifiedStorage.set(true);
  };

  return {
    isPhraseVerified,
    updatePhraseIsVerified,
  };
};

export default useCheckPhraseVerified;

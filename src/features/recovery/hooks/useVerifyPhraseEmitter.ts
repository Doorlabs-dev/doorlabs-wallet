import { DeviceEventEmitter } from 'react-native';
import { useEffect } from 'react';

type Props = {
  onPhraseVerifiedSuccess: () => void;
  onSkipVerifyPhrase: () => void;
};

const PHRASE_VERIFIED_SUCCESS_EVENT = 'phraseVerifiedSuccess';
const SKIP_VERIFY_PHRASE_EVENT = 'skipVerifyPhrase';

export function notifyPhraseVerifiedSuccess() {
  DeviceEventEmitter.emit(PHRASE_VERIFIED_SUCCESS_EVENT);
}

export function notifySkipVerifyPhrase() {
  DeviceEventEmitter.emit(SKIP_VERIFY_PHRASE_EVENT);
}

const useVerifyPhraseEmitter = ({
  onPhraseVerifiedSuccess,
  onSkipVerifyPhrase,
}: Props) => {
  useEffect(() => {
    const sub1 = DeviceEventEmitter.addListener(
      PHRASE_VERIFIED_SUCCESS_EVENT,
      onPhraseVerifiedSuccess
    );

    const sub2 = DeviceEventEmitter.addListener(
      SKIP_VERIFY_PHRASE_EVENT,
      onSkipVerifyPhrase
    );

    return () => {
      sub1.remove();
      sub2.remove();
    };
  }, []);
};

export default useVerifyPhraseEmitter;

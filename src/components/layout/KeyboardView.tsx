import { KeyboardAvoidingView, Platform } from 'react-native';

type Props = {
  children: JSX.Element;
};

const KeyboardView = ({ children }: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardView;

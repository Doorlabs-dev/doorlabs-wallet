import { StackActionType } from '@react-navigation/native';

type ScreenNavigationProps<T> = {
  navigate: ({ name, params }: { name: string; params?: T }) => void;
  goBack: () => void;
  dispatch: (actions: StackActionType) => void;
};

export { ScreenNavigationProps };

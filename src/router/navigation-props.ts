import { DrawerActionType, StackActionType } from '@react-navigation/native';

type ScreenNavigationProps<T> = {
  navigate: ({ name, params }: { name: string; params?: T }) => void;
  goBack: () => void;
  dispatch: (actions: StackActionType | DrawerActionType) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  setParams: (params?: T) => void;
  setOptions: (options: any) => void;
};

export { ScreenNavigationProps };

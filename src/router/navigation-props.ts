type ScreenNavigationProps<T> = {
  navigate: ({ name, params }: { name: string; params?: T }) => void;
};

export { ScreenNavigationProps };

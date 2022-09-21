import { HeaderTitle } from '@components/ui';

const useHeaderTitle = (title: string) => {
  return () => <HeaderTitle title={title} />;
};

export default useHeaderTitle;

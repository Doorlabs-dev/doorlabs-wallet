import { useHeaderHeight } from '@react-navigation/elements';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { colors } from '../../styles';
import Spacer from './Spacer';

const CustomSafeArea = styled(SafeAreaView)`
  background-color: ${colors.primary};
  flex: 1;
`;

const SafeArea = (props: any) => {
  const headerHeight = useHeaderHeight();
  return (
    <CustomSafeArea>
      {Platform.OS === 'android' ? <Spacer height={headerHeight} /> : null}
      {props.children}
    </CustomSafeArea>
  );
};

export default SafeArea;

import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { colors } from '../../styles';

const SafeArea = styled(SafeAreaView)`
  background-color: ${colors.primary};
  flex: 1;
`;

export default SafeArea;

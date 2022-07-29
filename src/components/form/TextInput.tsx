import { TextInputProps } from 'react-native';
import { TextInput as RNTextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import { colors } from '../../styles';

type StyleProps = {
  width?: number;
  height?: number;
};

const CustomInput = (props: TextInputProps & StyleProps) => (
  <RNTextInput
    {...props}
    selectionColor={colors.secondary}
    placeholderTextColor={colors.white}
    underlineColorAndroid={colors.white}
  />
);

const TextInput = styled(CustomInput)`
  ${({ width = 300 }) => {
    return css`
      width: ${width}px;
      font-size: 20px;
      font-weight: 200;
      padding: 12px 5px;
      color: ${colors.white};
    `;
  }}
`;

export default TextInput;

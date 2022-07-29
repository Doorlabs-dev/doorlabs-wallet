import styled, { css } from 'styled-components/native';
import { colors } from '../../styles';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

const Button = styled.TouchableOpacity`
  ${({ width = 300, height = 64, color = colors.secondary }: Props) => {
    return css`
      width: ${width}px;
      height: ${height}px;
      background-color: ${color};
      border-radius: 40px;
      justify-content: center;
      align-items: center;
    `;
  }}
`;

export default Button;

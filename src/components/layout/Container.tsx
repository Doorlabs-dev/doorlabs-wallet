import styled, { css } from 'styled-components/native';
import { colors } from '../../styles';

type Props = {
  center?: boolean;
  color?: string;
};

const Container = styled.View`
  ${({ center = true, color = colors.primary }: Props) => {
    return css`
      flex: 1;
      ${center &&
      css`
        justify-content: center;
        align-items: center;
      `}
      background-color: ${color};
    `;
  }}
`;

export default Container;

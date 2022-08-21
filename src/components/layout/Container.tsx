import styled, { css } from 'styled-components/native';
import { colors } from '../../styles';

type Props = {
  center?: boolean;
  color?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
};

const Container = styled.View`
  ${({
    center = true,
    justifyContent,
    alignItems,
    color = colors.primary,
  }: Props) => {
    return css`
      flex: 1;
      ${!!justifyContent &&
      css`
        justify-content: ${justifyContent};
      `}
      ${!!alignItems &&
      css`
        align-items: ${alignItems};
      `}
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

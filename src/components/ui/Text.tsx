import colors from '@styles/colors';
import styled, { css } from 'styled-components/native';

const Text = styled.Text`
  ${({
    color,
    size = 14,
    lineHeight,
    weight,
    textAlign,
  }: {
    color?: string;
    size?: number;
    lineHeight?: number;
    weight?: number;
    textAlign?: 'center' | 'left';
  }) => {
    return css`
      font-size: ${size}px;
      color: ${color || colors.white};
      ${lineHeight &&
      css`
        line-height: ${lineHeight}px;
      `}
      ${weight &&
      css`
        font-weight: ${weight};
      `}
      ${textAlign &&
      css`
        text-align: ${textAlign};
      `}
    `;
  }}
`;

export default Text;

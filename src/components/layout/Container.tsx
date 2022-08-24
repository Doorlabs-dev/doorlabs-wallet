import styled, { css } from 'styled-components/native';
import { colors } from '../../styles';

type PaddingType = number | [number, number] | [number, number, number, number];

type Props = {
  center?: boolean;
  color?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  padding?: PaddingType;
};

const getPadding = (padding: PaddingType): any => {
  if (padding instanceof Array) {
    return padding.length === 2
      ? css`
          padding: ${padding[0]}px ${padding[1]}px;
        `
      : css`
          padding-top: ${padding[0]}px;
          padding-right: ${padding[1]}px;
          padding-bottom: ${padding[2]}px;
          padding-left: ${padding[3]}px;
        `;
  } else {
    return css`
      padding: ${padding as number}px;
    `;
  }
};

const Container = styled.View`
  ${({
    center = true,
    justifyContent,
    alignItems,
    color = colors.primary,
    padding = [0, 16],
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
      ${!!padding && getPadding(padding)}
      background-color: ${color};
    `;
  }}
`;

export default Container;

import styled, { css } from "styled-components/native";
import { colors } from "../../styles";
interface FixedLengthArray<T, L extends number> extends ArrayLike<T> {
  length: L;
}

type PaddingType =
  | string
  | FixedLengthArray<string, 2>
  | FixedLengthArray<string, 4>;

type Props = {
  center?: boolean;
  color?: string;
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "flex-end" | "flex-start" | "space-between";
  alignItems?: "center" | "flex-end" | "flex-start" | "space-between";
  padding?: PaddingType;
};

const getPadding = (padding: PaddingType): any => {
  if (padding instanceof Array) {
    return padding.length === 2
      ? `padding-vertical: ${padding[0]}; padding-horizontal: ${padding[1]}`
      : `
        padding-top: ${padding[0]}; 
        padding-right: ${padding[1]}; 
        padding-bottom: ${padding[2]}; 
        padding-left: ${padding[3]};
        `;
  } else {
    return css`
      padding: ${padding as string}px;
    `;
  }
};

const Container = styled.View`
  ${({
    center = true,
    justifyContent,
    alignItems,
    color = colors.primary,
    padding,
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
      padding-right: 16px;
      padding-left: 16px;
    `;
  }}
`;
// ${!!padding && getPadding(padding)}

export default Container;

import styled, { css } from "styled-components/native";
import { colors } from "../../../styles";

type Props = {
  width?: number | string;
  height?: number;
  color?: string;
  paddingHorizontal?: number;
};

const Button = styled.TouchableOpacity`
  ${({
    width,
    height = 64,
    color = colors.primary700,
    paddingHorizontal = 0,
  }: Props) => {
    return css`
      ${width &&
      css`
        width: ${width};
      `}
      height: ${height}px;
      background-color: ${color};
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      padding-horizontal: ${paddingHorizontal}px;
    `;
  }}
`;

export default Button;

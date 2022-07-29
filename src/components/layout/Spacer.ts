import styled, { css } from 'styled-components/native';
type Props = {
  width?: number;
  height?: number;
};
const Spacer = styled.View`
  ${({ width = 0, height = 0 }: Props) => {
    return css`
      width: ${width}px;
      height: ${height}px;
    `;
  }}
`;

export default Spacer;

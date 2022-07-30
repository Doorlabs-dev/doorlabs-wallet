import styled, { css } from 'styled-components/native';

const Text = styled.Text`
  ${({ color, size = 14 }: { color?: string; size?: number }) => {
    return css`
      font-size: ${size}px;
      color: ${color ?? 'white'};
    `;
  }}
`;

export default Text;

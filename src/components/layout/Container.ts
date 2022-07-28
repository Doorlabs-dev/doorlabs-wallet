import styled, { css } from 'styled-components/native';

type Props = {
  center?: boolean;
  color?: string;
};

const Container = styled.View`
  ${({ center = true, color }: Props) => {
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

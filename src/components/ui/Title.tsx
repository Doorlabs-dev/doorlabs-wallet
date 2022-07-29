import styled, { css } from 'styled-components/native';

type Props = {
  size?: number;
};

const Title = styled.Text`
  ${({ size = 36 }: Props) => {
    return css`
      font-size: ${size}px;
      color: white;
      font-weight: 600;
    `;
  }}
`;

export default Title;

import styled, { css } from 'styled-components/native';

type Props = {
  size?: number;
  textAlign?: string;
};

const Title = styled.Text`
  ${({ size = 36, textAlign }: Props) => {
    return css`
      font-size: ${size}px;
      color: white;
      font-weight: 600;
      ${textAlign &&
      css`
        text-align: ${textAlign};
      `}
    `;
  }}
`;

export default Title;

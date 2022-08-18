import styled, { css } from 'styled-components/native';
type Props = {
  justifyContent?: string;
  alignItems?: string;
};
const Row = styled.View`
  ${({ justifyContent, alignItems }: Props) => {
    return css`
      flex-direction: row;
      ${justifyContent &&
      css`
        justify-content: ${justifyContent};
      `}
      ${alignItems &&
      css`
        align-items: ${alignItems};
      `}
    `;
  }}
`;

export default Row;

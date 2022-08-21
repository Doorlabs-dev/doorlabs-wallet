import styled, { css } from 'styled-components/native';
type Props = {
  justifyContent?: string;
  alignItems?: string;
};
const Column = styled.View`
  ${({ justifyContent, alignItems }: Props) => {
    return css`
      flex-direction: column;
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

export default Column;

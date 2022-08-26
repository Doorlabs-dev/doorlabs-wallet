import { Row, Spacer } from '@components/layout';
import React from 'react';
import styled from 'styled-components/native';
import Text from './Text';
import IconSearch from '@assets/svg/icon_search.svg';
import colors from '@styles/colors';

type Props = {};

const Container = styled.View`
  height: 44px;
  padding: 12px 18px;
  background-color: ${colors.greyScale700};
  border-radius: 8px;
  justify-content: center;
`;

const SearchBar = (props: Props) => {
  return (
    <Container>
      <Row>
        <IconSearch />
        <Spacer width={10} />
        <Text size={14} lineHeight={20} color={colors.greyScale600}>
          Search
        </Text>
      </Row>
    </Container>
  );
};

export default SearchBar;

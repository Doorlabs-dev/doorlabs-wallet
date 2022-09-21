import React from 'react';
import styled from 'styled-components/native';
import { Row } from '@components/layout';
import IconArrowRight from '@assets/svg/icon_arrow_right.svg';
import { Text } from '@components/ui';
import colors from '@styles/colors';

type Props = {
  title: string;
  onPress: () => void;
};

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 24px 0px;
`;

const SettingItem = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress} activeOpacity={0.8}>
      <Row justifyContent="space-between" alignItems="center">
        <Text color={colors.white} size={18} weight={400}>
          {title}
        </Text>
        <IconArrowRight />
      </Row>
    </Container>
  );
};

export default SettingItem;

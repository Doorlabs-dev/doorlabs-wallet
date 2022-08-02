import React from 'react';
import styled from 'styled-components/native';

const Image = styled.Image`
  width: 30px;
  height: 30px;
`;

const EtherIcon = () => {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      resizeMode="contain"
      source={require('../../../assets/eth_icon.png')}
    />
  );
};

export default EtherIcon;

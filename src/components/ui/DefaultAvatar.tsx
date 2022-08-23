import colors from '@styles/colors';
import styled from 'styled-components/native';
import Text from './Text';

const AvatarContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.blue};
  justify-content: center;
  align-items: center;
`;

type Props = {
  text?: string;
};

const DefaultAvatar = ({ text = '' }: Props) => {
  return (
    <AvatarContainer>
      {!!text ? (
        <Text size={14} weight={500}>
          {text}
        </Text>
      ) : null}
    </AvatarContainer>
  );
};

export default DefaultAvatar;

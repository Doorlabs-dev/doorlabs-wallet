import { Component } from 'react';
import { Image, View, ViewProps, ViewStyle, ImageStyle } from 'react-native';

const iconsMap = {
  check: require('@assets/icons/Icon-Accepted.png'),
};

export type IconNames = keyof typeof iconsMap;

interface IconProps extends ViewProps {
  containerStyle?: ViewStyle;
  name: IconNames;
  iconStyle?: ImageStyle;
  style?: ImageStyle;
  size?: number;
  color?: string;
}

export default class Icon extends Component<IconProps, View> {
  render() {
    const props = this.props;
    const source = iconsMap[props.name];
    return (
      <View style={[props.containerStyle, { justifyContent: 'center', alignItems: 'center' }]}>
        <Image
          fadeDuration={0}
          source={source}
          style={[
            {
              width: props.size || 20,
              resizeMode: 'contain',
              tintColor: props.color,
              height: props.size || 20,
            },
            props.iconStyle,
            props.style,
          ]}
        />
      </View>
    );
  }
}

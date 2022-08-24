import colors from "@styles/colors";
import { TouchableOpacity } from "react-native";
import Icon from "./Icon";

type CheckboxProps = {
  size?: number;
  checked?: boolean;
  borderColor?: string;
  onChange?: () => void;
  disabled?: boolean;
};

export const Checkbox = ({
  size = 20,
  checked = false,
  borderColor = colors.orange,
  onChange = () => {},
  disabled = false,
}: CheckboxProps) => {
  const backgroundColor = checked ? colors.orange : colors.primary;
  const _borderColor = checked ? backgroundColor : borderColor;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onChange}
      style={{
        width: size,
        height: size,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: _borderColor,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {checked && (
        <Icon name="check" color={colors.primary} size={(size * 60) / 100} />
      )}
    </TouchableOpacity>
  );
};

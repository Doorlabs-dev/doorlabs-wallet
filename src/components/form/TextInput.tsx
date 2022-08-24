import { Spacer } from "@components/layout";
import { Text } from "@components/ui";
import { useState } from "react";
import {
  Control,
  ControllerFieldState,
  FieldErrors,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useController,
} from "react-hook-form";
import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../styles";

interface Props {
  wrapperStyles?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
  placeholder?: string;
  label?: string;
  fieldState?: ControllerFieldState;
  name: string;
  errors?: FieldErrors;
  control: Control<FieldValues>;
  rules?: Omit<
    RegisterOptions<FieldValues, FieldPath<FieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const TextInput = ({
  wrapperStyles,
  inputProps,
  placeholder,
  label,
  name,
  errors,
  control,
  rules,
}: Props) => {
  const {
    field: { value, onChange },
  } = useController({ control, name, rules });
  const [isFocused, setFocused] = useState(false);
  const errorMess = errors?.[name]?.message || "";

  const _onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(true);
    inputProps?.onFocus?.(e);
  };

  const _onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocused(false);
    inputProps?.onBlur?.(e);
  };

  return (
    <View style={styles.textInputContainer}>
      {label && (
        <View style={styles.labelWrapper}>
          <Text lineHeight={20} color={colors.greyScale300} size={14}>
            {label}
          </Text>
        </View>
      )}
      <View
        style={[
          styles.textInputWrapper,
          wrapperStyles,
          isFocused && styles.textInputFocus,
        ]}
      >
        <RNTextInput
          placeholderTextColor={colors.greyScale400}
          underlineColorAndroid={colors.white}
          selectionColor={colors.white}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          {...inputProps}
          onFocus={_onFocus}
          onBlur={_onBlur}
          style={[styles.textInput, inputProps?.style]}
        />
      </View>
      {!!errorMess ? (
        <View style={{ height: 20, justifyContent: "center" }}>
          <Text color="red" size={10}>
            {errorMess}
          </Text>
        </View>
      ) : (
        <Spacer height={20} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    width: "100%",
  },
  textInputWrapper: {
    width: "100%",
    height: 48,
    backgroundColor: colors.greyScale,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    boxSizing: "border-box",
  },
  textInput: {
    width: "100%",
    color: colors.white,
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
  textInputFocus: {
    borderColor: colors.primary600,
    borderWidth: 1,
  },
  labelWrapper: {
    marginBottom: 8,
  },
});

// const TextInput = styled(CustomInput)`
//   ${({ width = 300 }) => {
//     return css`
//       width: ${width}px;
//       font-size: 20px;
//       font-weight: 200;
//       padding: 12px 5px;
//       color: ${colors.white};
//     `;
//   }}
// `;

export default TextInput;

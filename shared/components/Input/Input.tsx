import { SizeType } from "@/type/ui";
import { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { inputStylesDict } from "./styles";

export const Input = forwardRef<
  TextInput,
  TextInputProps & { size?: SizeType }
>((props, ref) => {
  const { size, style, value = "", ...rest } = props;
  const sizeStyles = inputStylesDict[props.size ?? "medium"];
  return (
    <TextInput ref={ref} value={value} {...rest} style={[sizeStyles, style]} />
  );
});

Input.displayName = "Input";

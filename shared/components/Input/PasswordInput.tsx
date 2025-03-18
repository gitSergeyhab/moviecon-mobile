import { SizeType } from "@/type/ui";
import { forwardRef, useState } from "react";
import { Text, TextInputProps, View } from "react-native";
import { Input } from "./Input";
import EyeCloseIcon from "../icons/EyeCloseIcon";
import EyeOpenIcon from "../icons/EyeOpenIcon";

export const PasswordInput = forwardRef<
  View,
  TextInputProps & { size?: SizeType }
>((props, ref) => {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View ref={ref}>
      <Input {...props} secureTextEntry={isSecure} />
      <Text
        onPress={() => setIsSecure((value) => !value)}
        style={{ position: "absolute", right: 10, top: 10 }}
      >
        {isSecure ? (
          <EyeOpenIcon width={20} height={20} color={"#000"} />
        ) : (
          <EyeCloseIcon width={20} height={20} color={"#000"} />
        )}
      </Text>
    </View>
  );
});

PasswordInput.displayName = "PasswordInput";

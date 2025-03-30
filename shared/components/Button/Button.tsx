import { ButtonType, SizeType } from "@/type/ui";
import { FC, ReactNode, useContext, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  ViewStyle,
} from "react-native";
import { btnTextStyles, buttonStylesDict } from "./styles";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import ThemeContext from "@/lib/providers/ThemeProvider";

export interface ButtonProps extends PressableProps {
  size?: SizeType;
  children?: ReactNode;
  variant?: ButtonType;
  isLoading?: boolean;
  isDisabled?: boolean;
  styles?: StyleProp<ViewStyle>;
}

export const Button: FC<ButtonProps> = (props) => {
  const { size, children, variant, isLoading, isDisabled, ...rest } = props;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const { theme } = useContext(ThemeContext);
  const styles = buttonStylesDict[size ?? "medium"];

  const buttonBg = colorTheme[theme].buttonBg[variant ?? "primary"];
  const buttonBgActive = colorTheme[theme].buttonBgActive[variant ?? "primary"];
  const buttonText = colorTheme[theme].buttonText[variant ?? "primary"];

  const bgColor = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [buttonBg, buttonBgActive],
  });

  const animateTo = (toValue: number) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animatedValue.setValue(0);
  }, [animatedValue]);

  return (
    <Pressable
      {...rest}
      onPressIn={() => animateTo(100)}
      onPressOut={() => animateTo(0)}
    >
      <Animated.View
        style={[
          {
            ...(styles as object),
            backgroundColor: bgColor,
            opacity: isDisabled ? 0.5 : 1,
          },
          props.styles,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator size={24} color={buttonText} />
        ) : (
          <Text
            style={{
              ...btnTextStyles.text,
              color: buttonText,
              fontSize: styles.fontSize,
            }}
          >
            {children}
          </Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

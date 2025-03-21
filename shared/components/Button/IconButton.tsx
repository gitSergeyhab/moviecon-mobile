import { FC, useContext } from "react";
import { Animated, Pressable, PressableProps, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { OutputColorRangeDict, Theme } from "@/type/ui";
import { radius } from "@/lib/configs/ui/sizes";

const outputRangeDictDefault: OutputColorRangeDict = {
  light: ["#3b2213", "#eb9c0a"],
  dark: ["#eb9c0a", "#3b2213"],
};

export interface IconButtonProps extends PressableProps {
  size: number;
  name: keyof typeof MaterialIcons.glyphMap;
  iconColor?: string;
  outputRangeDict?: OutputColorRangeDict;
  backgroundColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const {
    size,
    name,
    disabled,
    backgroundColor = "transparent",
    outputRangeDict = outputRangeDictDefault,
    paddingHorizontal,
    paddingVertical,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);

  const animatedValue = new Animated.Value(0);

  const onPressIn = () => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: outputRangeDict[theme],
  });

  return (
    <Pressable
      {...rest}
      onPressIn={onPressIn}
      disabled={disabled}
      onPressOut={onPressOut}
    >
      <Animated.View>
        <Animated.Text
          style={{
            color: disabled ? "#706e6c" : color,
            backgroundColor,
            borderRadius: radius.small,
            paddingHorizontal,
            paddingVertical,
          }}
        >
          <MaterialIcons name={name} size={size} />
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

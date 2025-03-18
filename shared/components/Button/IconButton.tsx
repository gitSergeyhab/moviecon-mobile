import { FC, useContext } from "react";
import { Animated, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { Theme } from "@/type/ui";

const outputRangeDict: Record<Theme, [string, string]> = {
  light: ["#3b2213", "#eb9c0a"],
  dark: ["#eb9c0a", "#3b2213"],
};

export interface IconButtonProps extends PressableProps {
  size: number;
  name: string;
  iconColor?: string;
}

export const IconButton: FC<IconButtonProps> = (props) => {
  const { size, name, ...rest } = props;
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
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: outputRangeDict[theme],
  });

  return (
    <Pressable {...rest} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View>
        <Animated.Text style={{ color, padding: 8 }}>
          <MaterialIcons
            // @ts-ignore
            name={name}
            size={size}
          />
        </Animated.Text>
      </Animated.View>
    </Pressable>
  );
};

import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { radius } from "@/lib/configs/ui/sizes";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { IconButton } from "@/shared/components/Button/IconButton";
import { FC, useContext } from "react";
import { StyleSheet, View } from "react-native";

export interface CheckIconButtonProps {
  onButtonPress: VoidFunction;
}
export const CheckIconButton: FC<CheckIconButtonProps> = ({
  onButtonPress,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <View
        style={[
          styles.mask,
          {
            backgroundColor: colorTheme[theme].background.primary,
          },
        ]}
      />
      <View style={styles.wrapper}>
        <IconButton name="check-circle" size={60} onPress={onButtonPress} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  mask: {
    position: "absolute",
    bottom: -55,
    right: -55,
    width: 150,
    height: 150,
    borderRadius: radius.circle,
    opacity: 0.5,
  },
});

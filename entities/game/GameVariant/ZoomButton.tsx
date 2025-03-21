import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { radius } from "@/lib/configs/ui/sizes";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { IconButton } from "@/shared/components/Button/IconButton";
import { FC, useContext } from "react";
import { StyleSheet, View } from "react-native";

export interface ZoomButtonProps {
  onImagePress: VoidFunction;
}
export const ZoomButton: FC<ZoomButtonProps> = ({ onImagePress }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colorTheme[theme].background.primary,
          },
        ]}
      />
      <View style={styles.wrapper}>
        <IconButton name="zoom-in" size={45} onPress={onImagePress} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 1,
    left: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  container: {
    position: "absolute",
    top: -40,
    left: -40,
    width: 100,
    height: 100,
    borderRadius: radius.circle,
    opacity: 0.5,
  },
});

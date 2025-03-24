import { Dimensions, StyleSheet, Text } from "react-native";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";
import { FC, PropsWithChildren } from "react";

export const ScreenHeader: FC<PropsWithChildren> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontDict.title,
    fontWeight: "bold",
    color: colorTheme.dark.text.accent,
    padding: indent.x1,
    borderBottomColor: colorTheme.light.border.accent,
    width: Dimensions.get("screen").width,
    textAlign: "center",
    elevation: 2,
  },
});

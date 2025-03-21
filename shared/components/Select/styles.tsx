import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    width: "100%",
  },
  select: {
    padding: 10,
    backgroundColor: "white",
    gap: indent.x2,
    borderRadius: radius.medium,
    minWidth: 200,
    borderWidth: 1,
    elevation: 10,
    borderColor: colorTheme.dark.border.accent,
    width: "100%",
  },
});

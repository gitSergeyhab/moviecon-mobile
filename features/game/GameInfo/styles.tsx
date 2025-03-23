import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { HEADER_HEIGHT } from "@/shared/constants/ui";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    fontWeight: "700",
    fontSize: fontDict.subtitle,
    color: colorTheme.dark.text.accent,
    textAlign: "center",
  },
  container: { marginTop: indent.x4, alignItems: "center" },
  gameResultTextWrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    padding: indent.x3,
    borderRadius: radius.xxLarge,
  },
  infoContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    gap: indent.x4,
    padding: indent.x5,
    paddingTop: indent.x1,
    height: Dimensions.get("screen").height - HEADER_HEIGHT - 80,
  },
  gameOverContainer: {
    width: "100%",
    height: 300,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  barChartContainer: {
    height: Dimensions.get("screen").height / 5,
    marginTop: indent.x2,
  },
  tabsContainer: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  tabsSectionContainer: {
    paddingHorizontal: indent.x2,
    paddingBottom: indent.x1,
    marginTop: indent.x2,
  },
  userResultContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    // width: 200,
    borderColor: colorTheme.light.border.accent,
    borderWidth: 2,
    paddingHorizontal: indent.x7,
    gap: indent.x7,
    borderRadius: radius.large,
    marginTop: indent.x2,
  },
  userResultText: {
    fontWeight: "700",
    alignItems: "center",
  },
  userResultValue: {
    fontWeight: "700",
    alignItems: "center",
    fontSize: fontDict.title,
    color: colorTheme.dark.text.accent,
  },
});

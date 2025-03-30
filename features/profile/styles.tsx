import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { indent } from "@/lib/configs/ui/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  recordsScrollView: {
    marginTop: indent.x4,
    paddingHorizontal: indent.x1,
    width: "100%",
  },
  noContentText: {
    textAlign: "center",
    marginTop: indent.x4,
    color: colorTheme.dark.text.accent,
  },
  tabContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  resultsTableContainer: {
    height: "70%",
    width: "100%",
  },
});

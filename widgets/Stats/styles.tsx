import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsWrapper: {
    marginTop: indent.x2,
    paddingHorizontal: indent.x1,
  },
  subHeader: {
    textAlign: "center",
    fontSize: fontDict.subtitle,
    marginTop: indent.x2,
    fontWeight: "700",
  },
});

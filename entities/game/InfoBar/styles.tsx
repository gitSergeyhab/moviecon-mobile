import { indent, radius } from "@/lib/configs/ui/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  iconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: indent.x1,
    borderRadius: radius.medium,
  },
});

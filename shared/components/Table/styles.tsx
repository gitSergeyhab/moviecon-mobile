import { indent, radius } from "@/lib/configs/ui/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  table: {
    borderWidth: 2,
    elevation: 16,
    marginTop: indent.x1,
    borderRadius: radius.medium,
    overflow: "hidden",
    width: "100%",
  },
  headerRow: {
    flexDirection: "row",
  },
  headerCell: {
    padding: 10,
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "700",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    paddingHorizontal: indent.x2,
    justifyContent: "center",
  },
  cellText: {
    fontSize: 14,
  },
});

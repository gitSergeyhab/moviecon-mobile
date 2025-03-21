import { indent, radius } from "@/lib/configs/ui/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: indent.x1,
    gap: 1,
  },
  itemContainer: {
    borderRadius: radius.small,
    elevation: 5,
    flex: 1,
    borderWidth: 1,
  },
});

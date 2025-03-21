import { indent, radius } from "@/lib/configs/ui/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  section: {
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: indent.x2,
  },
  modalContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    padding: indent.x5,
    gap: indent.x2,
  },
  iconButtonWrapper: {
    top: 10,
    right: 10,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.circle,
    zIndex: 10,
  },
  image: {
    width: "100%",
    height: "60%",
  },
});

import { fontDict } from "@/lib/configs/ui/fonts";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 300,
    alignSelf: "center",
    gap: 48,
    marginTop: indent.x1,
  },
  modalContent: {
    padding: indent.x5,
    borderRadius: radius.medium,
    gap: indent.x2,
    elevation: 16,
  },
  modalText: {
    textAlign: "center",
    fontSize: fontDict.subtitle,
    fontWeight: "700",
  },
  modalButtonsContainer: {
    gap: indent.x2,
  },
});

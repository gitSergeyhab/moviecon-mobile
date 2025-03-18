import { indent } from "@/lib/configs/ui/sizes";
import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    padding: indent.x5,
    gap: indent.x6,
    minWidth: 300,
    maxWidth: 400,
  },
});

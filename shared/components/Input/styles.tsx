import { SizeType } from "@/type/ui";
import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
  md: {
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#fff",
    elevation: 15,
  },
  sm: {
    height: 32,
    fontSize: 14,
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
  lg: {
    height: 48,
    fontSize: 18,
    borderWidth: 1,
    padding: 12,
    borderRadius: 4,
  },
});

export const inputStylesDict: Record<SizeType, object> = {
  medium: inputStyles.md,
  small: { ...inputStyles.md, ...inputStyles.sm },
  large: { ...inputStyles.md, ...inputStyles.lg },
};

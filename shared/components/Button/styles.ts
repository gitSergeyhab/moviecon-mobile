import { SizeType } from "@/type/ui";
import { StyleSheet } from "react-native";

export interface ButtonStyle {
  minHeight: number;
  fontSize: number;
  lineHeight: number;
  borderWidth: number;
  borderRadius: number;
  backgroundColor: string;
  alignItems: string;
  justifyContent: string;
}

export const buttonStyles = StyleSheet.create({
  md: {
    minHeight: 40,
    fontSize: 16,
    lineHeight: 1.2,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    elevation: 7,
    textAlign: "center",
    alignContent: "center",
    // boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.67)",
  },
  sm: {
    minHeight: 32,
    fontSize: 12,
    lineHeight: 1.2,
    borderWidth: 1,
    borderRadius: 4,
  },
  lg: {
    minHeight: 48,
    fontSize: 18,
    lineHeight: 1.2,
    borderWidth: 1,
    borderRadius: 12,
  },
});

export const buttonStylesDict: Record<SizeType, ButtonStyle> = {
  medium: buttonStyles.md,
  small: { ...buttonStyles.md, ...buttonStyles.sm },
  large: { ...buttonStyles.md, ...buttonStyles.lg },
};

export const btnTextStyles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

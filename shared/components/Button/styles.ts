import { radius } from "@/lib/configs/ui/sizes";
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
    borderRadius: radius.medium,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    elevation: 7,
    textAlign: "center",
    alignContent: "center",
    // boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.67)",
  },
  xsm: {
    paddingHorizontal: 2,
    fontSize: 12,
    minHeight: 28,
    borderRadius: radius.small,
  },
  sm: {
    minHeight: 32,
    fontSize: 12,
    borderRadius: radius.small,
  },
  lg: {
    minHeight: 48,
    fontSize: 18,
    borderRadius: radius.large,
  },
});

export const buttonStylesDict: Record<SizeType, ButtonStyle> = {
  medium: buttonStyles.md,
  small: { ...buttonStyles.md, ...buttonStyles.sm },
  large: { ...buttonStyles.md, ...buttonStyles.lg },
  xSmall: { ...buttonStyles.md, ...buttonStyles.xsm },
};

export const btnTextStyles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

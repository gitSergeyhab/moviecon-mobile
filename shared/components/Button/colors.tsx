import { ButtonType } from "@/type/ui";

export const buttonColorDict: Record<
  ButtonType,
  { backgroundColor: string; color: string; backgroundColorHover: string }
> = {
  primary: {
    backgroundColor: "#351204",
    backgroundColorHover: "#01468f",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#FFF",
    backgroundColorHover: "#bebaba",
    color: "#007AFF",
  },
  tertiary: {
    backgroundColor: "#FFF",
    backgroundColorHover: "#bebaba",
    color: "#000",
  },
};

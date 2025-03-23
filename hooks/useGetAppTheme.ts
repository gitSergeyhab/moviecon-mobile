import { colorTheme } from "@/lib/configs/ui/colorTheme";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { useContext } from "react";

export const useGetAppTheme = () => {
  const { theme } = useContext(ThemeContext);
  return colorTheme[theme];
};

import { colorTheme } from "@/lib/configs/ui/colorTheme";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { FC, PropsWithChildren, useContext } from "react";
import { View } from "react-native";

export const ScreenWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorTheme[theme].background.primary,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
};

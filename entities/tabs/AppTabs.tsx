import { Tabs as ExpoTabs } from "expo-router";
import React, { FC, PropsWithChildren, useContext } from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/shared/components/HapticTab";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import ThemeContext from "@/lib/providers/ThemeProvider";

export const AppTabs: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ExpoTabs
      screenOptions={{
        tabBarActiveTintColor: colorTheme[theme].text.accent,
        tabBarActiveBackgroundColor: colorTheme[theme].background.primary,
        tabBarInactiveBackgroundColor: colorTheme[theme].background.secondary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      {children}
    </ExpoTabs>
  );
};

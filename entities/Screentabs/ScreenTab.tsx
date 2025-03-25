import { Tabs } from "expo-router";
import React from "react";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";
import { MaterialIcons } from "@expo/vector-icons";

export interface ScreenTabProps {
  name: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  title: string;
}

export const createScreenTab = ({ iconName, name, title }: ScreenTabProps) => {
  return (
    <Tabs.Screen
      key={name}
      name={name}
      options={{
        title,
        tabBarIcon: ({ color }) => (
          <IconSymbol size={28} name={iconName} color={color} />
        ),
      }}
    />
  );
};

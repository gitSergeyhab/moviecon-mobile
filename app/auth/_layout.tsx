import { Tabs } from "expo-router";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";
import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { ScreenTabs } from "@/entities/Screentabs/ScreenTabs";

export default function TabLayout() {
  return (
    <>
      <TopUserBlock />
      <ScreenTabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Вход",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="login" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="register"
          options={{
            title: "Регистрация",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="app-registration" color={color} />
            ),
          }}
        />
      </ScreenTabs>
    </>
  );
}

import { Tabs } from "expo-router";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";
import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { AppTabs } from "@/entities/tabs/Tabs";

export default function TabLayout() {
  return (
    <>
      <TopUserBlock />
      <AppTabs>
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
      </AppTabs>
    </>
  );
}

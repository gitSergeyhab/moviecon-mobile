import { Redirect, Tabs } from "expo-router";
import { useSelector } from "react-redux";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/shared/components/HapticTab";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";
import TabBarBackground from "@/shared/components/ui/TabBarBackground";
import { Colors } from "@/shared/constants/Colors";
import { getUser, getUserStatus } from "@/store/user/selectors";
import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { useColorScheme } from "@/hooks/useColorScheme.web";

export default function TabLayout() {
  const user = useSelector(getUser);
  const requestUserStatus = useSelector(getUserStatus);

  const theme = useColorScheme();

  if (requestUserStatus === "loading") {
    return null;
  }

  if (!user) {
    return <Redirect href={"/auth"} />;
  }

  console.log(user);

  return (
    <>
      <TopUserBlock />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[theme || "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="send" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

import { Redirect, Tabs } from "expo-router";
import { useSelector } from "react-redux";
import React from "react";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";
import { getUser, getUserStatus } from "@/store/user/selectors";
import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { AppTabs } from "@/entities/tabs/AppTabs";
import { create } from "react-test-renderer";
import { createAppTab } from "@/entities/tabs/AppTab";
// import { AppTab } from "@/entities/tabs/AppTab";

export default function TabLayout() {
  const user = useSelector(getUser);
  const requestUserStatus = useSelector(getUserStatus);

  if (requestUserStatus === "loading") {
    return null;
  }

  if (!user) {
    return <Redirect href={"/auth"} />;
  }

  return (
    <>
      <TopUserBlock />
      <AppTabs>
        {createAppTab({
          iconName: "emoji-events",
          name: "explore",
          title: "Чемпионы",
        })}
        {createAppTab({
          iconName: "sports-esports",
          name: "index",
          title: "Игра",
        })}
        {createAppTab({
          iconName: "person",
          name: "profile",
          title: "Профиль",
        })}
        {createAppTab({
          iconName: "query-stats",
          name: "stats",
          title: "Статистика",
        })}
      </AppTabs>
    </>
  );
}

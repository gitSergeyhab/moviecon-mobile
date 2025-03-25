import { Redirect } from "expo-router";
import { useSelector } from "react-redux";
import React from "react";
import { getUser, getUserStatus } from "@/store/user/selectors";
import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { ScreenTabs } from "@/entities/Screentabs/ScreenTabs";
import { createScreenTab } from "@/entities/Screentabs/ScreenTab";

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
      <ScreenTabs>
        {createScreenTab({
          iconName: "emoji-events",
          name: "records",
          title: "Чемпионы",
        })}
        {createScreenTab({
          iconName: "sports-esports",
          name: "index",
          title: "Игра",
        })}
        {createScreenTab({
          iconName: "person",
          name: "profile",
          title: "Профиль",
        })}
        {createScreenTab({
          iconName: "query-stats",
          name: "stats",
          title: "Статистика",
        })}
      </ScreenTabs>
    </>
  );
}

import { Redirect } from "expo-router";
import { useSelector } from "react-redux";
import React from "react";
import { getUser, getUserStatus } from "@/store/user/selectors";
import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { AppTabs } from "@/entities/tabs/AppTabs";
import { createAppTab } from "@/entities/tabs/AppTab";

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

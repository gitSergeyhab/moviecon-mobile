import { Redirect } from "expo-router";
import { useSelector } from "react-redux";
import React from "react";

import { getUser, getUserStatus } from "@/store/user/selectors";
import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";

export default function TabLayout() {
  const user = useSelector(getUser);
  const requestUserStatus = useSelector(getUserStatus);

  if (requestUserStatus === "loading") return null;
  if (!user) return <Redirect href={"/auth"} />;

  return <TopUserBlock />;
}

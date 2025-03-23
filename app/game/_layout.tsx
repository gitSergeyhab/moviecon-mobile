import { TopUserBlock } from "@/entities/TopUserBlok/TopUserBlock";
import { Stack } from "expo-router";

export default function GameLayout() {
  return (
    <>
      <TopUserBlock />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

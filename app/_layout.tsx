import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

import "react-native-reanimated";
import { store } from "@/store";
import { fetchUser } from "@/store/user/thunks";
import { Providers } from "@/lib/providers/Providers";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "@/lib/providers/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { getUserStatus } from "@/store/user/selectors";

SplashScreen.preventAutoHideAsync();
store.dispatch(fetchUser());

const RootLayout = () => {
  const requestUserStatus = useSelector(getUserStatus);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || requestUserStatus === "loading") {
    return null;
  }

  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#311a1a" }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="light" />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default function RootLayoutWithProviders() {
  return (
    <Providers>
      <RootLayout />
      <Toast />
    </Providers>
  );
}

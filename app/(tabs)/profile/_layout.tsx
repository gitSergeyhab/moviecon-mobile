import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { indent } from "@/lib/configs/ui/sizes";

export default function RegisterLayout() {
  const theme = useGetAppTheme();
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#940c0c" }}>
      <Drawer
        screenOptions={{
          drawerItemStyle: { marginVertical: indent.x1 },
          drawerLabelStyle: { color: theme.text.primary },
          drawerStyle: { backgroundColor: theme.background.primary },
          drawerInactiveBackgroundColor: theme.background.secondary,
          drawerActiveBackgroundColor: theme.text.accent,
          headerTintColor: theme.text.primary,

          headerStyle: {
            backgroundColor: theme.background.secondary,
            height: 40,
          },
          headerTitleStyle: {
            height: 60,
          },
          headerLeftContainerStyle: {
            alignItems: "flex-end",
          },
        }}
      >
        <Drawer.Screen
          name="index" // Это `app/(tabs)/register/index.tsx`
          options={{
            drawerLabel: "Ваши рекорды",
            title: "Ваши рекорды",
          }}
        />
        <Drawer.Screen
          name="results"
          options={{
            drawerLabel: "Ваши результаты",
            title: "Ваши результаты",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

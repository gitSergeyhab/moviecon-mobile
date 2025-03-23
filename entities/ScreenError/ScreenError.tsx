import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";
import { Button } from "@/shared/components/Button/Button";
import { router } from "expo-router";
import { FC } from "react";
import { Text, View } from "react-native";
export interface ScreenErrorProps {
  text?: string;
}
export const ScreenError: FC<ScreenErrorProps> = ({ text }) => {
  const theme = useGetAppTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background.primary,
        gap: indent.x2,
      }}
    >
      <Text
        style={{
          color: theme.text.primary,
          fontSize: fontDict.subtitle,
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        {text || "Что-то пошло не так..."}
      </Text>
      <Button onPress={() => router.reload()}>Перезагрузить</Button>
      <Button onPress={() => router.push("/")}>На главную</Button>
    </View>
  );
};

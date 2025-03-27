import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { FC } from "react";
import { ActivityIndicator, View } from "react-native";

export interface ScreenLoaderProps {
  color?: string;
  size?: number;
}
export const ScreenLoader: FC<ScreenLoaderProps> = ({
  color = "#f89c11",
  size = 64,
}) => {
  const theme = useGetAppTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background.primary,
      }}
    >
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

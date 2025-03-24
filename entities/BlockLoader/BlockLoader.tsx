import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { FC } from "react";
import { ActivityIndicator, View } from "react-native";

export interface BlockLoaderProps {
  color?: string;
  height?: number;
}
export const BlockLoader: FC<BlockLoaderProps> = ({
  color = "#f89c11",
  height = 32,
}) => {
  const theme = useGetAppTheme();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background.primary,
        height,
      }}
    >
      <ActivityIndicator size={height / 2} color={color} />
    </View>
  );
};

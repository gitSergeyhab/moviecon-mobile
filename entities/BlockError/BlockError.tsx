import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { indent } from "@/lib/configs/ui/sizes";
import { FC } from "react";
import { Text, View } from "react-native";
export interface BlockErrorProps {
  text?: string;
  height?: number;
}
export const BlockError: FC<BlockErrorProps> = ({ text, height }) => {
  const theme = useGetAppTheme();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.background.primary,
        gap: indent.x2,
        height,
      }}
    >
      <Text
        style={{
          color: theme.text.primary,
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        {text || "Что-то пошло не так..."}
      </Text>
    </View>
  );
};

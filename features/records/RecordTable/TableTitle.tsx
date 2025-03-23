import { fontDict } from "@/lib/configs/ui/fonts";
import { FC } from "react";
import { Text } from "react-native";

export interface TableTitleProps {
  text: string;
  color?: string;
}
export const TableTitle: FC<TableTitleProps> = ({ text, color }) => {
  return (
    <Text
      style={{
        color,
        fontSize: fontDict.subtitle,
        textAlign: "center",
        fontWeight: "700",
      }}
    >
      {text}
    </Text>
  );
};

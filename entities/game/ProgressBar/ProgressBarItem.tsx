import { FC } from "react";
import { AnswerStatus } from "@/type/game";
import { View } from "react-native";
import { indent } from "@/lib/configs/ui/sizes";
import { colorDict } from "./constants";
import { styles } from "./styles";
import { colorTheme } from "@/lib/configs/ui/colorTheme";

interface ProgressBarItemProps {
  status: AnswerStatus;
  isCurrent: boolean;
}

export const ProgressBarItem: FC<ProgressBarItemProps> = ({
  status,
  isCurrent,
}) => (
  <View
    style={[
      styles.itemContainer,
      {
        backgroundColor: colorDict[status],
        height: isCurrent ? 12 : 8,
        borderColor: isCurrent ? "transparent" : colorTheme.dark.border.primary,
        marginHorizontal: isCurrent ? indent.x1 : 0,
      },
    ]}
  />
);

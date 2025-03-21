import { FC } from "react";
import { AnswerStatus } from "@/type/game";
import { StyleSheet, View } from "react-native";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { Theme } from "@/type/ui";

const colorDict: Record<AnswerStatus, string> = {
  correct: "#247c28",
  skipped: "#4d4d4d",
  wrong: "#ff0000",
  none: "#f1f7ff",
};

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
      styles.container,
      {
        backgroundColor: colorDict[status],
        height: isCurrent ? 12 : 8,

        borderColor: isCurrent ? "transparent" : "#000",
        marginHorizontal: isCurrent ? indent.x1 : 0,
      },
    ]}
  />
);

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.small,
    elevation: 5,
    flex: 1,
    borderWidth: 1,
    // width: "100%",
  },
});

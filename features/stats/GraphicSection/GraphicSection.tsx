import { FC } from "react";
import { GameCategory, GameDuration } from "@/type/game";
import { Dimensions, View } from "react-native";
import { useQueryScoresByParams } from "@/hooks/useQueryScoresByParams";
import { BarChart } from "./BarChart";
import { BlockLoader } from "@/entities/BlockLoader/BlockLoader";
import { BlockError } from "@/entities/BlockError/BlockError";
import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { styles } from "../styles";

export interface GraphicSectionProps {
  duration: GameDuration;
  category: GameCategory;
}
export const GraphicSection: FC<GraphicSectionProps> = ({
  duration,
  category,
}) => {
  const { isError, isLoading, scores } = useQueryScoresByParams({
    duration,
    category,
  });

  const theme = useGetAppTheme();

  if (isLoading) {
    return <BlockLoader height={Dimensions.get("screen").height / 5} />;
  }

  if (isError) {
    return (
      <BlockError
        height={Dimensions.get("screen").height / 5}
        text="Не удалось загрузить данные"
      />
    );
  }

  if (!scores || scores.length < 3) {
    return (
      <BlockError
        height={Dimensions.get("screen").height / 5}
        text="Недостаточно данных для построения графика"
      />
    );
  }

  return (
    <View style={styles.barChartContainer}>
      <BarChart barData={scores} labelColor={theme.text.primary} />
    </View>
  );
};

import { GraphicSection } from "@/features/stats/GraphicSection/GraphicSection";
import { StatsTabs } from "@/features/stats/TableSection/StatsTabs";
import { TablesSection } from "@/features/stats/TableSection/TableSection";
import { UserResult } from "@/features/stats/UserResult";
import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { ScreenHeader } from "@/shared/components/ui/texts";
import { categoryTranslate, durationTranslate } from "@/shared/constants/game";
import { categoryTabData, durationTabData } from "@/shared/constants/stats";
import { GameCategory, GameDuration } from "@/type/game";
import { FC, useState } from "react";
import { Platform, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const Stats: FC = () => {
  const theme = useGetAppTheme();
  const [duration, setDuration] = useState<GameDuration>("COMMON");
  const [category, setCategory] = useState<GameCategory>("all");
  const onClickDuration = (durationItem: GameDuration) =>
    setDuration(durationItem);
  const onClickCategory = (categoryItem: GameCategory) =>
    setCategory(categoryItem);

  const subHeader = [styles.subHeader, { color: theme.text.primary }];

  return (
    <View style={styles.container}>
      <ScreenHeader>Статистика</ScreenHeader>
      <View style={styles.tabsWrapper}>
        <StatsTabs
          onPress={onClickCategory}
          selectedValue={category}
          tabData={categoryTabData}
        />
        <StatsTabs
          onPress={onClickDuration}
          selectedValue={duration}
          tabData={durationTabData}
        />
      </View>

      <Text style={subHeader}>{durationTranslate[duration]} игра</Text>
      <Text style={subHeader}>{categoryTranslate[category]}</Text>

      <UserResult category={category} duration={duration} />
      {Platform.OS !== "web" && (
        <GraphicSection duration={duration} category={category} />
      )}

      <Text style={subHeader}>Наши рекордсмены</Text>
      <ScrollView>
        <TablesSection duration={duration} category={category} />
      </ScrollView>
    </View>
  );
};

import { StatsTabs } from "@/features/stats/StatsTabs";
import { TablesSection } from "@/features/stats/TableSection";
import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";
import { ScreenHeader } from "@/shared/components/ui/texts";
import { categoryTranslate, durationTranslate } from "@/shared/constants/game";
import { categoryTabData, durationTabData } from "@/shared/constants/stats";
import { GameCategory, GameDuration } from "@/type/game";
import { FC, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export const Stats: FC = () => {
  const theme = useGetAppTheme();
  const [duration, setDuration] = useState<GameDuration>("COMMON");
  const [category, setCategory] = useState<GameCategory>("all");
  const onClickDuration = (durationItem: GameDuration) =>
    setDuration(durationItem);
  const onClickCategory = (categoryItem: GameCategory) =>
    setCategory(categoryItem);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingBottom: indent.x2,
        }}
      >
        <ScreenHeader>Статистика</ScreenHeader>
        <View style={{ marginTop: indent.x2, paddingHorizontal: indent.x1 }}>
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

        <Text
          style={{
            color: theme.text.primary,
            textAlign: "center",
            fontSize: fontDict.subtitle,
            marginTop: indent.x2,
            fontWeight: "700",
          }}
        >
          {durationTranslate[duration]} игра
        </Text>

        <Text
          style={{
            color: theme.text.primary,
            textAlign: "center",
            fontSize: fontDict.subtitle,
            marginTop: indent.x1,
            fontWeight: "700",
          }}
        >
          {categoryTranslate[category]}
        </Text>
      </View>

      <ScrollView>
        <TablesSection duration={duration} category={category} />
      </ScrollView>

      {/* <SecondaryText className="font-bold text-center my-2 text-red-500">
          График с разбивкой по категориям появится, когда будет больше данных
        </SecondaryText>
        <HistogramSection /> */}
    </View>
  );
};

import { RecordTable } from "@/features/records/RecordTable/RecordTable";
import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";
import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";
import { GameAggregateRecord } from "@/type/game-results";
import { FC } from "react";

export interface RecordsProps {
  records: GameAggregateRecord[];
}
export const Records: FC<RecordsProps> = ({ records }) => {
  return (
    <ScreenWrapper>
      <Text style={styles.title}>Чемпионы</Text>
      <ScrollView style={{ width: "95%" }}>
        {records.map((record) => (
          <RecordTable
            key={record.params.category + record.params.duration}
            tableRecords={record}
          />
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontDict.title,
    fontWeight: "bold",
    color: colorTheme.dark.text.accent,
    padding: indent.x1,
    borderBottomColor: colorTheme.light.border.accent,
    width: Dimensions.get("screen").width,
    textAlign: "center",
    elevation: 2,
  },
});

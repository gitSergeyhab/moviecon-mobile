import { RecordTable } from "@/features/records/RecordTable/RecordTable";
import { ScrollView } from "react-native";
import { ScreenWrapper } from "@/shared/components/ScreenWrapper/ScreenWrapper";

import { GameAggregateRecord } from "@/type/game-results";
import { FC } from "react";
import { ScreenHeader } from "@/shared/components/ui/texts";

export interface RecordsProps {
  records: GameAggregateRecord[];
}
export const Records: FC<RecordsProps> = ({ records }) => {
  return (
    <ScreenWrapper>
      <ScreenHeader>Чемпионы</ScreenHeader>
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

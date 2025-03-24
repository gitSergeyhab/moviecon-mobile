import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { Table } from "@/shared/components/Table/Table";
import { categoryTranslate, durationTranslate } from "@/shared/constants/game";
import { GameAggregateRecord } from "@/type/game-results";
import React, { FC } from "react";
import { View } from "react-native";
import { TableTitle } from "./TableTitle";
import { indent } from "@/lib/configs/ui/sizes";
import { useGetDefaultTableStyle } from "@/hooks/useGetDefaultTableStyle";

export interface RecordTableProps {
  tableRecords: GameAggregateRecord;
}

export const RecordTable: FC<RecordTableProps> = ({ tableRecords }) => {
  const theme = useGetAppTheme();
  const { bestResult, params } = tableRecords;
  const tableStyles = useGetDefaultTableStyle();

  return (
    <View style={{ marginTop: indent.x3 }}>
      <TableTitle
        text={durationTranslate[params.duration]}
        color={theme.text.primary}
      />
      <TableTitle
        text={categoryTranslate[params.category]}
        color={theme.text.primary}
      />

      <Table
        columns={["#", "Игрок", "Счет"]}
        data={bestResult.map((result, index) => [
          index + 1,
          result.userName,
          result.score,
        ])}
        columnWidths={[13, 64, 23]}
        {...tableStyles}
        rowHeight={40}
      />
    </View>
  );
};

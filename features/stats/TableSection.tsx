import { FC } from "react";
import { GameCategory, GameDuration } from "@/type/game";
import { ActivityIndicator, Text, View } from "react-native";
import { useQueryRecordsByParams } from "@/hooks/useQueryRecordsByParams";
import { ScreenError } from "@/entities/ScreenError/ScreenError";
import { Table } from "@/shared/components/Table/Table";
import { toDayMonthYear } from "@/lib/utils/date";
import { cutString } from "@/lib/utils/string";
import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { useGetDefaultTableStyle } from "@/hooks/useGetDefaultTableStyle";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";

const tableHeaders = ["#", "Дата", "Имя", "Счет"];
const tableWidths = [10, 22, 50, 18];
export interface TablesSectionProps {
  duration: GameDuration;
  category: GameCategory;
}
export const TablesSection: FC<TablesSectionProps> = ({
  duration,
  category,
}) => {
  const { isError, isLoading, records } = useQueryRecordsByParams({
    duration,
    category,
    limit: 20,
  });

  const tableStyles = useGetDefaultTableStyle();
  const theme = useGetAppTheme();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError || !records) {
    return <ScreenError text="Не удалось загрузить данные таблицы рекордов" />;
  }

  if (!records || !records.length) {
    return <Text>Нет данных для отображения</Text>;
  }

  const tableRecords = records.map(({ createdAt, userName, score }, i) => [
    i + 1,
    toDayMonthYear(createdAt),
    cutString(userName),
    score,
  ]);

  console.log({ records });
  return (
    <View style={{ paddingHorizontal: 10, marginTop: indent.x2 }}>
      <Text
        style={{
          fontSize: fontDict.subtitle,
          fontWeight: "700",
          color: theme.text.primary,
        }}
      >
        Наши рекордсмены
      </Text>
      <Table
        columns={tableHeaders}
        data={tableRecords}
        columnWidths={tableWidths}
        rowHeight={30}
        alignItems="flex-start"
        {...tableStyles}
      />
    </View>
  );
};

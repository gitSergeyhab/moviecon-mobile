import { FC } from "react";
import { GameCategory, GameDuration } from "@/type/game";
import { Dimensions, View } from "react-native";
import { useQueryRecordsByParams } from "@/hooks/useQueryRecordsByParams";
import { Table } from "@/shared/components/Table/Table";
import { toDayMonthYear } from "@/lib/utils/date";
import { cutString } from "@/lib/utils/string";
import { useGetDefaultTableStyle } from "@/hooks/useGetDefaultTableStyle";
import { BlockLoader } from "@/entities/BlockLoader/BlockLoader";
import { BlockError } from "@/entities/BlockError/BlockError";
import { styles } from "../styles";
import { useSelector } from "react-redux";
import { userSelectors } from "@/store/user";

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
  const user = useSelector(userSelectors.getUser);
  const userRecordRowIndexes = records?.reduce((acc, record, i) => {
    if (record.userId === user?.id) {
      acc.push(i);
    }
    return acc;
  }, [] as number[]);

  console.log({ userRecordRowIndexes });
  const tableStyles = useGetDefaultTableStyle();

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

  if (!records || !records.length) {
    return (
      <BlockError
        height={Dimensions.get("screen").height / 5}
        text="Недостаточно данных для построения таблицы"
      />
    );
  }

  const tableRecords = records.map(({ createdAt, userName, score }, i) => [
    i + 1,
    toDayMonthYear(createdAt),
    cutString(userName),
    score,
  ]);

  console.log({ records });
  return (
    <View style={styles.tabsSectionContainer}>
      <Table
        columns={tableHeaders}
        data={tableRecords}
        columnWidths={tableWidths}
        rowHeight={30}
        alignItems="flex-start"
        accentRow={{
          indexes: userRecordRowIndexes || [],
        }}
        {...tableStyles}
      />
    </View>
  );
};

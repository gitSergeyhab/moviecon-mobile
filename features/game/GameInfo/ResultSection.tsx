import { useGetDefaultTableStyle } from "@/hooks/useGetDefaultTableStyle";
import { Table } from "@/shared/components/Table/Table";
import { LevelResult } from "@/type/game";
import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface TableData {
  title: string;
  value: string | number;
}
export interface PrevLevelSectionProps {
  levelResult: LevelResult;
  totalScore: number;
  isGameOver: boolean;
}
export const ResultSection: FC<PrevLevelSectionProps> = ({
  levelResult,
  totalScore,
}) => {
  const tableStyles = useGetDefaultTableStyle();

  const { answersScore, errorBonus, levelScore, skipBonus, timeBonus } =
    levelResult;

  const tableData: TableData[] = [
    { title: "балы за ответы", value: answersScore },
    { title: "балы за неиспользованное право на ошибку", value: errorBonus },
    { title: "балы за неиспользованное право на пропуск", value: skipBonus },
    { title: "балы за время", value: timeBonus },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Результаты уровня</Text>
      <Table
        {...tableStyles}
        rowHeight={30}
        data={tableData.map(({ title, value }) => [title, value])}
        columnWidths={[80, 20]}
        alignItems="stretch"
      />
      <Table
        {...tableStyles}
        rowHeight={30}
        data={[
          ["Баллы за уровень", levelScore],
          ["Всего баллов", totalScore],
        ]}
        columnWidths={[80, 20]}
        alignItems="stretch"
      />
    </View>
  );
};

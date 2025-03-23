import { useGetDefaultTableStyle } from "@/hooks/useGetDefaultTableStyle";
import { indent } from "@/lib/configs/ui/sizes";
import { Table } from "@/shared/components/Table/Table";
import { Level } from "@/type/game";
import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export interface LevelInfoSectionProps {
  level: Level;
}
export const LevelInfoSection: FC<LevelInfoSectionProps> = ({ level }) => {
  const { errors, number, questions, skips, time } = level;
  const tableStyles = useGetDefaultTableStyle();

  const tableData = [
    { title: "номер уровня", value: number },
    { title: "количество вопросов", value: questions },
    { title: "максимальное количество ошибок", value: errors },
    { title: "максимальное количество пропусков", value: skips },
    { title: "базовое время на уровень, секунд", value: time / 1000 },
  ];

  return (
    <View style={{ marginTop: indent.x4 }}>
      <Text style={styles.header}>Следующий уровень</Text>
      <View style={{ alignItems: "center" }}>
        <Table
          columnWidths={[80, 20]}
          rowHeight={30}
          data={tableData.map(({ title, value }) => [title, value])}
          {...tableStyles}
          alignItems="stretch"
        />
      </View>
    </View>
  );
};

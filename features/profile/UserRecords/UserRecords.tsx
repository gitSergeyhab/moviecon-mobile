import { ScreenError } from "@/entities/ScreenError/ScreenError";
import { ScreenLoader } from "@/entities/ScreenLoader/ScreenLoader";
import { useGetDefaultTableStyle } from "@/hooks/useGetDefaultTableStyle";
import { useQueryUserRecordsSplitByDuration } from "@/hooks/useQueryUserRecords";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { indent } from "@/lib/configs/ui/sizes";
import { Table } from "@/shared/components/Table/Table";
import { ScreenHeader } from "@/shared/components/ui/texts";
import { ScrollView, Text, View } from "react-native";
import { styles } from "../styles";
const categories = ["Стандартная Игра", "Большая Игра", "Быстрая Игра"];

export const UserRecords = () => {
  const { commonGames, longGames, quickGames, isLoading, isError } =
    useQueryUserRecordsSplitByDuration();
  const tableStyles = useGetDefaultTableStyle();

  if (isLoading) {
    return <ScreenLoader />;
  }

  if (isError) {
    return <ScreenError text="Не удалось загрузить данные" />;
  }

  const results = [commonGames, longGames, quickGames].filter(
    (games) => games?.length
  );

  return (
    <>
      <ScreenHeader>Ваши рекорды</ScreenHeader>
      <ScrollView style={styles.recordsScrollView}>
        {results.map((games, index) => (
          <View key={index} style={{ marginBottom: indent.x2 }}>
            <Text
              style={{
                color: colorTheme.dark.text.accent,
                fontWeight: "700",
              }}
            >
              {categories[index]}
            </Text>
            <Table
              data={games!}
              columns={["Дата", "Счет", "Категория", "Итог"]}
              columnWidths={[25, 15, 30, 30]}
              rowHeight={30}
              {...tableStyles}
              alignItems="stretch"
            />
          </View>
        ))}
        {results.length === 0 && (
          <Text style={styles.noContentText}>Нет результатов</Text>
        )}
      </ScrollView>
    </>
  );
};

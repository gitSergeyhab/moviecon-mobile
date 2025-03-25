import { useGetDefaultTableStyle } from "@/hooks/useGetDefaultTableStyle";
import { indent } from "@/lib/configs/ui/sizes";
import { toDayMonthYearTime } from "@/lib/utils/date";
import { Table } from "@/shared/components/Table/Table";
import { GameResult, GameResultStatus } from "@/type/game-results";
import { Dimensions, ScrollView, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { tableColumnWidths, tableHeaderColumns } from "./constants";
import { useScrollToEnd } from "@/hooks/useScrollToEnd";
import { FC } from "react";
import { BlockLoader } from "@/entities/BlockLoader/BlockLoader";
import { BlockError } from "@/entities/BlockError/BlockError";

const statusDict: Record<
  GameResultStatus,
  keyof typeof MaterialIcons.glyphMap
> = {
  ENDED: "sentiment-dissatisfied",
  LOST: "sentiment-very-dissatisfied",
  WON: "sentiment-satisfied-alt",
};

export interface UserResultsTableProps {
  results: GameResult[];
  isLoading: boolean;
  isError: boolean;
}
export const UserResultsTable: FC<UserResultsTableProps> = ({
  results,
  isLoading,
  isError,
}) => {
  const tableStyles = useGetDefaultTableStyle();
  const scrollRef = useScrollToEnd(results);

  if (isLoading) {
    return <BlockLoader height={Dimensions.get("screen").height / 3} />;
  }

  if (isError) {
    return <BlockError text="Не удалось загрузить данные" />;
  }

  return (
    <ScrollView
      style={{
        marginTop: indent.x4,
        paddingHorizontal: indent.x1,
        width: "100%",
      }}
      ref={scrollRef}
    >
      <Table
        data={
          results?.map(({ createdAt, score, status }) => [
            toDayMonthYearTime(createdAt),
            score,
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons
                size={16}
                name={statusDict[status]}
                color={colorTheme.dark.text.accent}
              />
            </View>,
          ]) || []
        }
        columns={tableHeaderColumns}
        columnWidths={tableColumnWidths}
        rowHeight={30}
        {...tableStyles}
        cellTextStyle={{
          ...tableStyles.cellTextStyle,
          fontSize: fontDict.small,
        }}
        alignItems="stretch"
      />
    </ScrollView>
  );
};

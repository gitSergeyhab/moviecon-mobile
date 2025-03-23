import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { FC } from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { styles } from "./styles";

export interface TableProps {
  columns?: string[];
  data: (string | number | React.ReactNode)[][];
  columnWidths: number[];
  rowHeight: number;
  cellStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  headerTextStyle?: StyleProp<TextStyle>;
  cellTextStyle?: StyleProp<TextStyle>;
  borderColor?: string;
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
}

export const Table: FC<TableProps> = ({
  columns,
  data,
  columnWidths,
  rowHeight,
  cellStyle,
  headerStyle,
  headerTextStyle,
  cellTextStyle,
  borderColor = colorTheme.dark.border.accent,
  alignItems = "center",
}) => {
  return (
    <View style={[styles.table]}>
      {columns && columns.length > 0 && (
        <View style={[styles.headerRow, { borderColor }]}>
          {columns.map((column, index) => (
            <View
              key={index}
              style={[
                styles.headerCell,
                {
                  width: `${columnWidths[index]}%`,
                  borderColor,
                  alignItems,
                },
                headerStyle,
              ]}
            >
              <Text style={[styles.headerText, headerTextStyle]}>{column}</Text>
            </View>
          ))}
        </View>
      )}

      {data.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={[styles.row, { minHeight: rowHeight, borderColor }]}
        >
          {row.map((cell, cellIndex) => (
            <View
              key={cellIndex}
              style={[
                styles.cell,
                {
                  width: `${columnWidths[cellIndex]}%`,
                  borderColor,
                  alignItems,
                },
                cellStyle,
              ]}
            >
              {typeof cell === "string" || typeof cell === "number" ? (
                <Text style={[styles.cellText, cellTextStyle]}>{cell}</Text>
              ) : (
                cell
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

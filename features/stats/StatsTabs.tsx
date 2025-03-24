import { indent } from "@/lib/configs/ui/sizes";
import { Button } from "@/shared/components/Button/Button";
import { StyleProp, View, ViewStyle } from "react-native";

interface StatsTabsData<T extends string> {
  label: string;
  value: T;
}

export interface StatsTabsProps<T extends string> {
  tabData: StatsTabsData<T>[];
  onPress: (value: T) => void;
  selectedValue: T;
  btnStyle?: StyleProp<ViewStyle>;
  gap?: number;
}

export const StatsTabs = <T extends string>({
  tabData,
  onPress,
  selectedValue,
  gap,
  btnStyle = { minHeight: 36, borderRadius: 0 },
}: StatsTabsProps<T>) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap,
      }}
    >
      {tabData.map(({ label, value }) => (
        <View style={{ width: "24%", flex: 1 }} key={value}>
          <Button
            size="xSmall"
            onPress={() => onPress(value)}
            variant={value === selectedValue ? "secondary" : "primary"}
            styles={btnStyle}
          >
            {label}
          </Button>
        </View>
      ))}
    </View>
  );
};

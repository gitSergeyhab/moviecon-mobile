import { Button } from "@/shared/components/Button/Button";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "../../features/stats/styles";

interface AppTabsData<T extends string> {
  label: string;
  value: T;
}

export interface StatsTabsProps<T extends string> {
  tabData: AppTabsData<T>[];
  onPress: (value: T) => void;
  selectedValue: T;
  btnStyle?: StyleProp<ViewStyle>;
  gap?: number;
  viewStyle?: StyleProp<ViewStyle>;
}

export const AppTabs = <T extends string>({
  tabData,
  onPress,
  selectedValue,
  gap,
  btnStyle = { minHeight: 36, borderRadius: 0 },
  viewStyle,
}: StatsTabsProps<T>) => {
  return (
    <View style={[styles.tabsContainer, { gap }, viewStyle]}>
      {tabData.map(({ label, value }) => (
        <View style={{ flex: 1 }} key={value}>
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

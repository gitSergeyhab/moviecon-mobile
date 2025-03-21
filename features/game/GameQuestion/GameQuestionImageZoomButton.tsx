import { FC, useContext } from "react";
import { View } from "react-native";
import { IconButton } from "@/shared/components/Button/IconButton";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { styles } from "./styles";
// !!!!!!!!!!!!!!
// const sizeDict: Record<
//   SizeType,
//   { indent: number; coloredSize: number; iconSize: number }
// > = {
//   large: { coloredSize: 100, iconSize: 45, indent: -40 },
//   medium: { coloredSize: 100, iconSize: 45, indent: -40 },
//   small: { coloredSize: 100, iconSize: 45, indent: -40 },
// };

export interface GameQuestionImageZoomButtonProps {
  onImagePress: VoidFunction;
}
export const GameQuestionImageZoomButton: FC<
  GameQuestionImageZoomButtonProps
> = ({ onImagePress }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.zoomButtonContainer,
        {
          backgroundColor: theme === "dark" ? "#000" : "#fff",
        },
      ]}
    >
      <View style={styles.zoomButtonWrapper}>
        <IconButton name="zoom-in" size={32} onPress={onImagePress} />
      </View>
    </View>
  );
};

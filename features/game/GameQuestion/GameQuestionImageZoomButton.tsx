import { FC, useContext } from "react";
import { View } from "react-native";
import { IconButton } from "@/shared/components/Button/IconButton";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { radius } from "@/lib/configs/ui/sizes";
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
  // size?: SizeType;
}
export const GameQuestionImageZoomButton: FC<
  GameQuestionImageZoomButtonProps
> = ({ onImagePress }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <View
        style={{
          position: "absolute",
          bottom: -60,
          left: "50%",
          width: 70,
          height: 90,
          backgroundColor: theme === "dark" ? "#000" : "#fff",
          borderRadius: radius.circle,
          opacity: 0.5,
          justifyContent: "flex-start",
          transform: [{ translateX: -35 }],
          zIndex: 10,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            zIndex: 11,
          }}
        >
          <IconButton name="zoom-in" size={32} onPress={onImagePress} />
        </View>
      </View>
    </>
  );
};

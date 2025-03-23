import { GameStatus } from "@/type/game";
import { FC, useMemo } from "react";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";
import { fontDict } from "@/lib/configs/ui/fonts";
import { getRandomItem } from "@/lib/utils/common";
import { getImportedImagesByStatus } from "./helpers";

export const importedImagesByStatus = getImportedImagesByStatus();

export interface GameOverSectionProps {
  gameStatus: GameStatus;
  totalScore: number;
}

export const GameOverSection: FC<GameOverSectionProps> = ({
  gameStatus,
  totalScore,
}) => {
  const randomSource = useMemo(
    () => getRandomItem(importedImagesByStatus[gameStatus]),
    [gameStatus]
  );
  return (
    <ImageBackground
      source={randomSource as any}
      resizeMode="cover"
      style={styles.gameOverContainer}
    >
      <View style={styles.gameResultTextWrapper}>
        <Text style={[styles.header, { fontSize: fontDict.header }]}>
          {gameStatus === "ENDED" && "Игра окончена"}
          {gameStatus === "LOST" && "Поражение"}
          {gameStatus === "WON" && "Победа!"}
        </Text>

        <Text style={styles.header}>Ваш результат </Text>
        <Text style={styles.header}>{totalScore}</Text>
      </View>
    </ImageBackground>
  );
};

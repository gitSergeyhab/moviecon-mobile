import { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { ScreenError } from "@/entities/ScreenError/ScreenError";
import { ScreenLoader } from "@/entities/ScreenLoader/ScreenLoader";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { gameSelectors } from "@/store/game";
import { fetchLevelInfo } from "@/store/game/thunks";
import { GameButtonBlock } from "./GameButtonBlock";
import { GameOverSection } from "./GameOverSection";
import { ResultSection } from "./ResultSection";
import { LevelInfoSection } from "./LevelInfoSection";
import { styles } from "./styles";

export const GameInfo = () => {
  const dispatch = useAppDispatch();
  const totalScore = useSelector(gameSelectors.getTotalScore);
  const prevLevelResult = useSelector(gameSelectors.getPrevLevelResult);
  const levelInfo = useSelector(gameSelectors.getLevelInfo);
  const gameStatus = useSelector(gameSelectors.getGameStatus);
  const isGameOver = useSelector(gameSelectors.getIsGameOver);
  const infoLoadingStatus = useSelector(gameSelectors.getInfoLoadingStatus);

  useEffect(() => {
    dispatch(fetchLevelInfo());
  }, [dispatch]);

  if (infoLoadingStatus === "loading") {
    return <ScreenLoader />;
  }

  if (infoLoadingStatus === "failed")
    return <ScreenError text="Упс... Что-то пошло не так..." />;

  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={styles.infoContainer}>
        {isGameOver && (
          <GameOverSection gameStatus={gameStatus} totalScore={totalScore} />
        )}
        {!!prevLevelResult && (
          <ResultSection
            levelResult={prevLevelResult}
            totalScore={totalScore}
            isGameOver={isGameOver}
          />
        )}
        {!!levelInfo && <LevelInfoSection level={levelInfo} />}
        <GameButtonBlock isGameOver={isGameOver} />
      </View>
    </ScrollView>
  );
};

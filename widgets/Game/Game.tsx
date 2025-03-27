import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { gameActions, gameSelectors } from "@/store/game";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Redirect } from "expo-router";
import appRoutes from "@/lib/configs/routes/routes";
import { ScrollView } from "react-native";
import { GameQuestion } from "@/features/game/GameQuestion/GameQuestion";
import { VariantsSection } from "@/features/game/VariantsSection/VariantsSection";
import { ProgressBar } from "@/entities/game/ProgressBar/ProgressBar";
import { InfoBar } from "@/entities/game/InfoBar/InfoBar";
import { ControlsSection } from "@/features/game/ControlsSection/ControlsSection";
import { styles } from "./styles";

export const Game: FC = () => {
  const test = useSelector(gameSelectors.getCurrentTest);
  const isTransition = useSelector(gameSelectors.getIsTransition);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let timer: NodeJS.Timeout | null;

    if (isTransition) {
      timer = setTimeout(() => {
        dispatch(gameActions.setTransition(false));
        dispatch(gameActions.setNextQuestion());
      }, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [dispatch, isTransition]);

  if (!test) {
    console.error("Тест не найден");
    return <Redirect href={appRoutes.main} />;
  }

  const { question, testType } = test;

  return (
    <ScrollView style={styles.container}>
      <InfoBar />
      <ProgressBar />

      <GameQuestion
        questionText={test.questionText}
        testType={testType}
        variant={question}
      />

      <VariantsSection
        testType={testType}
        variants={test.variants}
        testId={test.id}
      />
      <ControlsSection />
    </ScrollView>
  );
};

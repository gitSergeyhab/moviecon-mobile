import { useState, FC, useEffect } from "react";
import { useSelector } from "react-redux";
// import { useImagePreload } from "@/hooks/useImagePreload";
import { gameActions, gameSelectors } from "@/store/game";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Redirect } from "expo-router";
import appRoutes from "@/lib/configs/routes/routes";
import { Dimensions, Image, ScrollView, StyleSheet, View } from "react-native";
import { Modal } from "@/shared/components/Modal/Modal";
import { GameQuestion } from "@/features/game/GameQuestion/GameQuestion";
import { VariantsSection } from "@/features/game/VariantsSection/VariantsSection";
import { ProgressBar } from "@/entities/game/ProgressBar/ProgressBar";
import { InfoBar } from "@/entities/game/InfoBar/InfoBar";
import {
  FrameByMovie,
  MovieByBudget,
  MovieByFrame,
  MovieByPerson,
  MovieBySlogan,
  MovieByYear,
  PersonByMovie,
  PersonByPhoto,
  PhotoByPerson,
  SloganByMovie,
  YearByMovie,
} from "@/mock/tests";
import { Test, TestType } from "@/type/game";
import { SizeType } from "@/type/ui";
import { indent } from "@/lib/configs/ui/sizes";
import { ControlsSection } from "@/features/game/ControlsSection/ControlsSection";
import { styles } from "./styles";

// | "PersonByMovie" / question = 30% / answer = 60% 2*2
// | "MovieByPerson" / question = 30% / answer = 60% 2*2
// | "MovieByFrame" / question = 40% / answer = 50% 4*1
// | "FrameByMovie"  / question = 100px / answer = 70% 4*1
// | "PersonByPhoto" / question = 40% / answer = 50% 4*1
// | "PhotoByPerson"  / question = 100px / answer = 70% 2*2
// | "YearByMovie" / question = 40% / answer = 50% 4*1
// | "MovieByYear" / question = 100px / answer = 70% 2*2
// | "SloganByMovie" / question = 40% / answer = 50% 4*1
// | "MovieBySlogan"  / question = 100px / answer = 70% 2*2
// | "MovieByBudget"; / question = 100px / answer = 70% 2*2

export const Game: FC = () => {
  const test = useSelector(gameSelectors.getCurrentTest);
  console.log({ test });
  // const test = FrameByMovie as unknown as Test;
  console.log("Game");
  const isTransition = useSelector(gameSelectors.getIsTransition);
  // const nextQuestionImages = useSelector(gameSelectors.getNextQuestionImages);
  // const isPreLoadingImages = useSelector(gameSelectors.getIsLoadingImages);
  // useImagePreload(nextQuestionImages, !isPreLoadingImages);
  // useImagePreload(nextQuestionImages, true);

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
      {/* <div
        className={cn(
          "rounded-lg z-10 absolute top-0 left-0 right-0 bottom-0 bg-black pointer-events-none transition duration-500 ease-in-out",
          isTransition ? "opacity-100" : "opacity-0"
        )}
      /> */}
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

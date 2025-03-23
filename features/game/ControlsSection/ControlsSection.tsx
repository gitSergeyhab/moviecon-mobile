import { useContext, useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchExitGame, fetchSkipQuestion } from "@/store/game/thunks";
import { ActivityIndicator, Text, View } from "react-native";
import { IconButton } from "@/shared/components/Button/IconButton";
import { NexGameAction } from "@/type/game";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { ControlsSectionModal } from "./ControlsSectionModal";
import { styles } from "./styles";
import {
  outputColorRangeDictExit,
  outputColorRangeDictNext,
} from "./constants";
import { useSelector } from "react-redux";
import { gameSelectors } from "@/store/game";

export const ControlsSection = () => {
  const options = useSelector(gameSelectors.getRemainingOptions);
  // const isAnswerDone = useSelector(gameSelectors.getIsAnswerDone);
  const [isModalShown, setIsModalShown] = useState(false);
  const isLoading = useSelector(gameSelectors.getLoadingStatus) === "loading";
  const nexGameAction = useSelector(gameSelectors.getNexGameAction);
  const dispatch = useAppDispatch();

  // const options = {
  //   remainingErrors: 1,
  //   remainingQuestions: 2,
  //   remainingSkips: 3,
  // };
  // const isAnswerDone = false;
  // const [isModalShown, setIsModalShown] = useState(false);
  // const isLoading = false;
  // const nexGameAction: NexGameAction | null = "NEXT_TEST";
  // const dispatch = useAppDispatch();

  const { theme } = useContext(ThemeContext);

  // if (isAnswerDone === null) {
  //   console.error("невозможно получить статус вопроса");
  //   return <Text>невозможно получить статус вопроса</Text>;
  // }

  if (!options || !nexGameAction) {
    console.error("невозможно получить данные уровня");
    return <Text>невозможно получить данные уровня</Text>;
  }

  const isSkipQuestionBtnShow = options.remainingSkips > 0;

  const handleClickSkipBtn = () => dispatch(fetchSkipQuestion());
  const handleCloseModal = () => setIsModalShown(false);
  const exitGame = () => dispatch(fetchExitGame(handleCloseModal));

  return (
    <View
      style={[
        styles.container,
        {
          pointerEvents: isLoading ? "none" : "auto",
        },
      ]}
    >
      <IconButton
        name="meeting-room"
        size={28}
        onPress={() => setIsModalShown(true)}
        outputRangeDict={outputColorRangeDictExit}
        backgroundColor={theme === "dark" ? "#fff" : "#690c00"}
        paddingHorizontal={13}
      />
      {isSkipQuestionBtnShow && (
        <IconButton
          name="navigate-next"
          size={28}
          onPress={handleClickSkipBtn}
          outputRangeDict={outputColorRangeDictNext}
          // disabled={isLoading || !isSkipQuestionBtnShow}
          backgroundColor={theme === "dark" ? "#fff" : "#666666"}
          paddingHorizontal={13}
        />
      )}

      <ControlsSectionModal
        exitGame={exitGame}
        hideModal={handleCloseModal}
        isModalOpen={isModalShown}
      />
    </View>
  );
};

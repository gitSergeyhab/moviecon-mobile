import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchExitGame, fetchSkipQuestion } from "@/store/game/thunks";
import { gameSelectors } from "@/store/game";
import { ActivityIndicator, Text, View } from "react-native";
import { Button } from "@/shared/components/Button/Button";
import { IconButton } from "@/shared/components/Button/IconButton";
import { Modal } from "@/shared/components/Modal/Modal";
import { NexGameAction } from "@/type/game";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";
import { OutputColorRangeDict } from "@/type/ui";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";

const outputColorRangeDictExit: OutputColorRangeDict = {
  light: ["#d6cac8", "#da1305"],
  dark: ["#aa1a00", "#da1305"],
};
const outputColorRangeDictNext: OutputColorRangeDict = {
  light: ["#e79c10", "#f8e806"],
  dark: ["#e79c10", "#f8e806"],
};

export const ControlsSection = () => {
  // const options = useSelector(gameSelectors.getRemainingOptions);
  // const isAnswerDone = useSelector(gameSelectors.getIsAnswerDone);
  // const [isModalShown, setIsModalShown] = useState(false);
  // const isLoading = useSelector(gameSelectors.getLoadingStatus) === "loading";
  // const nexGameAction = useSelector(gameSelectors.getNexGameAction);
  // const dispatch = useAppDispatch();

  const options = {
    remainingErrors: 1,
    remainingQuestions: 2,
    remainingSkips: 3,
  };
  const isAnswerDone = false;
  const [isModalShown, setIsModalShown] = useState(false);
  const isLoading = false;
  const nexGameAction: NexGameAction | null = "NEXT_TEST";
  const dispatch = useAppDispatch();

  const { theme } = useContext(ThemeContext);

  if (isAnswerDone === null) {
    console.error("невозможно получить статус вопроса");
    return <Text>невозможно получить статус вопроса</Text>;
  }

  if (!options || !nexGameAction) {
    console.error("невозможно получить данные уровня");
    return <Text>невозможно получить данные уровня</Text>;
  }

  const isSkipQuestionBtnShow = options.remainingSkips > 0 && !isAnswerDone;

  const handleClickSkipBtn = () => dispatch(fetchSkipQuestion());
  const handleCloseModal = () => setIsModalShown(false);
  const handleClickExitGameBtn = () =>
    dispatch(fetchExitGame(handleCloseModal));

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        maxWidth: 300,
        alignSelf: "center",
        gap: 48,
        marginTop: indent.x1,
      }}
    >
      {isLoading && <ActivityIndicator size={24} color={"#000"} />}

      <IconButton
        name="meeting-room"
        size={28}
        onPress={() => setIsModalShown(true)}
        outputRangeDict={outputColorRangeDictExit}
        backgroundColor={theme === "dark" ? "#fff" : "#690c00"}
        paddingHorizontal={13}
      />

      <IconButton
        name="navigate-next"
        size={28}
        onPress={handleClickSkipBtn}
        outputRangeDict={outputColorRangeDictNext}
        disabled={isLoading || !isSkipQuestionBtnShow}
        backgroundColor={theme === "dark" ? "#fff" : "#666666"}
        paddingHorizontal={13}
      />
      <Modal hideModal={handleCloseModal} isVisible={isModalShown}>
        <View
          style={{
            backgroundColor: colorTheme[theme].background.secondary,
            padding: 20,
            borderRadius: radius.medium,
            gap: indent.x2,
            elevation: 16,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: fontDict.subtitle,
              fontWeight: "700",
              color: colorTheme[theme].text.primary,
            }}
          >
            Вы уверены, что хотите завершить игру?
          </Text>
          <View
            style={{
              gap: indent.x2,
            }}
          >
            <Button onPress={handleCloseModal}>Отмена</Button>
            <Button onPress={handleClickExitGameBtn}>Завершить</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

import { useContext, useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchExitGame, fetchSkipQuestion } from "@/store/game/thunks";
import { View } from "react-native";
import { IconButton } from "@/shared/components/Button/IconButton";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { ControlsSectionModal } from "./ControlsSectionModal";
import { styles } from "./styles";
import {
  exitBtnBg,
  nexBtnBg,
  outputColorRangeDictExit,
  outputColorRangeDictNext,
} from "./constants";
import { useSelector } from "react-redux";
import { gameSelectors } from "@/store/game";
import { showToast } from "@/lib/utils/toasts";

export const ControlsSection = () => {
  const options = useSelector(gameSelectors.getRemainingOptions);
  const [isModalShown, setIsModalShown] = useState(false);
  const isLoading = useSelector(gameSelectors.getLoadingStatus) === "loading";
  const nexGameAction = useSelector(gameSelectors.getNexGameAction);
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  if (!options || !nexGameAction) {
    showToast({ message: "невозможно получить данные уровня" });
    return null;
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
        backgroundColor={exitBtnBg[theme]}
        paddingHorizontal={13}
      />
      {isSkipQuestionBtnShow && (
        <IconButton
          name="navigate-next"
          size={28}
          onPress={handleClickSkipBtn}
          outputRangeDict={outputColorRangeDictNext}
          backgroundColor={nexBtnBg[theme]}
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

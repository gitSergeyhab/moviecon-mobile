import { FC, useContext } from "react";
import { Text, View } from "react-native";
import { Button } from "@/shared/components/Button/Button";
import { Modal } from "@/shared/components/Modal/Modal";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { styles } from "./styles";

export interface ControlsSectionModalProps {
  hideModal: () => void;
  isModalOpen: boolean;
  exitGame: () => void;
}

export const ControlsSectionModal: FC<ControlsSectionModalProps> = ({
  exitGame,
  hideModal,
  isModalOpen,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Modal hideModal={hideModal} isVisible={isModalOpen}>
      <View
        style={[
          styles.modalContent,
          {
            backgroundColor: colorTheme[theme].background.secondary,
          },
        ]}
      >
        <Text
          style={[
            styles.modalText,
            {
              color: colorTheme[theme].text.primary,
            },
          ]}
        >
          Вы уверены, что хотите завершить игру?
        </Text>
        <View style={styles.modalButtonsContainer}>
          <Button onPress={hideModal}>Отмена</Button>
          <Button onPress={exitGame}>Завершить</Button>
        </View>
      </View>
    </Modal>
  );
};

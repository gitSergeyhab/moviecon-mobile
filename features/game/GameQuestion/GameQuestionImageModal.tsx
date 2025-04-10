import { FC, useContext } from "react";
import { Modal } from "@/shared/components/Modal/Modal";
import { Dimensions, Image, View } from "react-native";
import { IconButton } from "@/shared/components/Button/IconButton";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { styles } from "./styles";

export interface GameQuestionImageModalProps {
  image?: string;
  isModalOpen: boolean;
  hideModal: VoidFunction;
}

export const GameQuestionImageModal: FC<GameQuestionImageModalProps> = ({
  isModalOpen,
  hideModal,
  image,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Modal hideModal={hideModal} isVisible={isModalOpen}>
      <View
        style={[
          styles.modalContent,
          {
            backgroundColor: colorTheme[theme].background.primary,
          },
        ]}
      >
        <View style={styles.iconButtonWrapper}>
          <IconButton size={48} name="close" onPress={hideModal} />
        </View>
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
          }}
          alt=""
        />
      </View>
    </Modal>
  );
};

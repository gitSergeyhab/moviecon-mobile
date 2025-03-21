import { FC, useContext } from "react";
import { Modal } from "@/shared/components/Modal/Modal";
import { Dimensions, Image, View } from "react-native";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { IconButton } from "@/shared/components/Button/IconButton";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { colorTheme } from "@/lib/configs/ui/colorTheme";

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
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          // padding: 20,
          gap: indent.x2,
          backgroundColor: colorTheme[theme].background.primary,
        }}
      >
        <View
          style={{
            top: 10,
            right: 10,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: radius.circle,
            zIndex: 10,
          }}
        >
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

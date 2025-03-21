import { FC, useContext } from "react";
import { Variant } from "@/type/game";
import { Modal } from "@/shared/components/Modal/Modal";
import { Button } from "@/shared/components/Button/Button";
import { Image, View } from "react-native";
import { IconButton } from "@/shared/components/Button/IconButton";
import { PrimaryTextBlock } from "@/shared/texts/PrimaryTextBlock";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { styles } from "./styles";

export interface VariantsSectionModalProps {
  isModalOpen: boolean;
  hideModal: VoidFunction;
  hasTextBlock: boolean;
  variant: Variant | null;
  choseVariant: VoidFunction;
}

export const VariantsSectionModal: FC<VariantsSectionModalProps> = ({
  hideModal,
  isModalOpen,
  hasTextBlock,
  variant,
  choseVariant,
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
          source={{ uri: variant?.imageUrl }}
          resizeMode="contain"
          style={styles.image}
          alt=""
        />
        {hasTextBlock && (
          <PrimaryTextBlock
            enText={variant?.enName}
            secondary={variant?.year}
            text={variant?.name}
            isInBtn={false}
          />
        )}

        <Button onPress={choseVariant}>выбрать</Button>
      </View>
    </Modal>
  );
};

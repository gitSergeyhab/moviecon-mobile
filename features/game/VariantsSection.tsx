import { useState, FC, useContext } from "react";
import { useSelector } from "react-redux";
import { TestType, Variant } from "@/type/game";
import { checkValueExist } from "@/lib/utils/common";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchAnswerQuestion } from "@/store/game/thunks";
import { gameSelectors } from "@/store/game";
import { Modal } from "@/shared/components/Modal/Modal";
import { Button } from "@/shared/components/Button/Button";
import { Image, View } from "react-native";
import { GameVariant } from "@/entities/game/GameVariant/GameVariant";
import { testStyles } from "@/widgets/game/Game";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { SizeType } from "@/type/ui";
import { IconButton } from "@/shared/components/Button/IconButton";
import { PrimaryTextBlock } from "@/shared/texts/PrimaryTextBlock";
import { QuestionTextBlock } from "@/shared/texts/QuestionTextBlock";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { colorTheme } from "@/lib/configs/ui/colorTheme";

const heights: Record<SizeType, string> = {
  large: "60%",
  medium: "50%",
  small: "auto",
};

export interface VariantsSectionProps {
  testType: TestType;
  variants: Variant[];
  testId: string;
}

export const VariantsSection: FC<VariantsSectionProps> = ({
  variants,
  testType,
  testId,
}) => {
  const correctId = useSelector(gameSelectors.getCorrectAnswerId);
  const dispatch = useAppDispatch();
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<Variant | null>(null);
  // const [modalImage, setModalImage] = useState("");
  // const [modalAnswerId, setModalAnswerId] = useState<string | number | null>(
  //   null
  // );

  const { theme } = useContext(ThemeContext);
  const { answer } = testStyles[testType];

  // const resultVariants = getResultVariants(variants);

  // console.log({ resultVariants });

  const handleImageClick = (variant: Variant) => {
    // setModalImage(variant.imageUrl!);
    setModalVariant(variant);
    // setModalAnswerId(variant.id!);
    setIsModalOpen(true);
  };

  const handleAnswerClick = async (variantId: string | number) => {
    setSelectedId(variantId);
    dispatch(fetchAnswerQuestion({ variantId, questionId: testId }));
  };

  const onClose = () => {
    setIsModalOpen(false);
    setModalVariant(null);
    // setModalAnswerId(null);
  };

  const handleModalBtnClick = () => {
    // if (checkValueExist(modalAnswerId)) {
    //   handleAnswerClick(modalAnswerId);
    // }
    if (checkValueExist(modalVariant?.id)) {
      handleAnswerClick(modalVariant?.id);
    }
    setIsModalOpen(false);
    setModalVariant(null);
    // setModalAnswerId(null);
  };

  const {
    answer: { hasTextBlock, hasBgImage },
  } = testStyles[testType];

  return (
    <View
      style={{
        flexDirection: answer.grid === "4*1" ? "column" : "row",
        flexWrap: "wrap",
        gap: hasBgImage ? 1 : indent.x1,
        justifyContent: "center",
        marginTop: indent.x2,
        height: answer.height,
      }}
    >
      {variants.map((variant) => (
        <GameVariant
          key={variant.id}
          selectedId={selectedId}
          correctId={correctId}
          onButtonPress={() => handleAnswerClick(variant.id!)}
          onImagePress={() => handleImageClick(variant)}
          testType={testType}
          variant={variant}
        />
      ))}

      <Modal hideModal={onClose} isVisible={isModalOpen}>
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            padding: 20,
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
            <IconButton size={48} name="close" onPress={onClose} />
          </View>

          <Image
            source={{ uri: modalVariant?.imageUrl }}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "60%",
            }}
            alt=""
          />
          {hasTextBlock && (
            <PrimaryTextBlock
              enText={modalVariant?.enName}
              secondary={modalVariant?.year}
              text={modalVariant?.name}
              isInBtn={false}
            />
          )}

          <Button onPress={handleModalBtnClick}>выбрать</Button>
        </View>
      </Modal>
    </View>
  );
};

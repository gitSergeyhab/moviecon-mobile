import { useState, FC } from "react";
import { useSelector } from "react-redux";
import { TestType, Variant } from "@/type/game";
import { checkValueExist } from "@/lib/utils/common";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchAnswerQuestion } from "@/store/game/thunks";
import { gameSelectors } from "@/store/game";
import { View } from "react-native";
import { GameVariant } from "@/entities/game/GameVariant/GameVariant";
import { indent } from "@/lib/configs/ui/sizes";
import { VariantsSectionModal } from "./VariantsSectionModal";
import { styles } from "./styles";
import { gameUISettings } from "@/lib/configs/game/ui";

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
  const { answer } = gameUISettings[testType];

  // const resultVariants = getResultVariants(variants); !!

  // console.log({ resultVariants });

  const handleImageClick = (variant: Variant) => {
    setModalVariant(variant);
    setIsModalOpen(true);
  };

  const handleAnswerClick = async (variantId: string | number) => {
    setSelectedId(variantId);
    dispatch(fetchAnswerQuestion({ variantId, questionId: testId }));
  };

  const hideModal = () => {
    setIsModalOpen(false);
    setModalVariant(null);
  };

  const handleModalBtnClick = () => {
    if (checkValueExist(modalVariant?.id)) {
      handleAnswerClick(modalVariant?.id);
    }
    setIsModalOpen(false);
    setModalVariant(null);
  };

  const {
    answer: { hasTextBlock, hasBgImage },
  } = gameUISettings[testType];

  return (
    <View
      style={[
        styles.section,
        {
          flexDirection: answer.grid === "4*1" ? "column" : "row",
          gap: hasBgImage ? 1 : indent.x1,
          height: answer.height,
        },
      ]}
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
      <VariantsSectionModal
        choseVariant={handleModalBtnClick}
        hasTextBlock={hasTextBlock}
        isModalOpen={isModalOpen}
        hideModal={hideModal}
        variant={modalVariant}
      />
    </View>
  );
};

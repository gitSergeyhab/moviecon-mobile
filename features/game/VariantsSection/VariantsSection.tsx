import { useState, FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { TestType, Variant } from "@/type/game";
import { checkValueExist } from "@/lib/utils/common";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { fetchAnswerQuestion } from "@/store/game/thunks";
import { gameActions, gameSelectors } from "@/store/game";
import { View } from "react-native";
import { GameVariant } from "@/entities/game/GameVariant/GameVariant";
import { indent } from "@/lib/configs/ui/sizes";
import { VariantsSectionModal } from "./VariantsSectionModal";
import { styles } from "./styles";
import { gameUISettings } from "@/lib/configs/game/ui";
import { getAnswerStatus } from "@/entities/game/GameVariant/helpers";

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
  const loadingStatus = useSelector(gameSelectors.getLoadingStatus);
  const [selectedAnswerId, setSelectedAnswerId] = useState<
    string | number | null
  >(null);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<Variant | null>(null);

  useEffect(() => {
    setSelectedAnswerId(null); // Сбросить выбранный ответ, когда меняется testId
  }, [testId]);

  const handleImageClick = (variant: Variant) => {
    setModalVariant(variant);
    setIsModalOpen(true);
  };

  console.log({ variants });

  const handleAnswerClick = async (variantId: string | number) => {
    setSelectedAnswerId(variantId);
    dispatch(gameActions.setSelectedAnswerId(variantId));
    dispatch(
      fetchAnswerQuestion({
        variantId,
        questionId: testId,
      })
    );
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
    answer: { hasTextBlock, hasBgImage, grid, height },
  } = gameUISettings[testType];

  return (
    <View
      style={[
        styles.section,
        {
          flexDirection: grid === "4*1" ? "column" : "row",
          gap: hasBgImage ? 1 : indent.x1,
          height,
        },
      ]}
    >
      {variants.map((variant) => (
        <GameVariant
          key={variant.id}
          onButtonPress={() => handleAnswerClick(variant.id!)}
          onImagePress={() => handleImageClick(variant)}
          testType={testType}
          variant={variant}
          loadingStatus={loadingStatus}
          selectedAnswerId={selectedAnswerId}
          answerStatus={getAnswerStatus(
            variant.id,
            selectedAnswerId,
            correctId
          )}
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

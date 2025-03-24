import { FC } from "react";
import { VariantBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { getContents } from "@/lib/utils/game";
import { View, StyleSheet } from "react-native";
import { VariantImageBlock } from "./VariantImageBlock";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { gameUISettings } from "@/lib/configs/game/ui";
import { ZoomButton } from "./ZoomButton";
import { CheckIconButton } from "./CheckIconButton";
import { CheckButton } from "./CheckButton";
import { getVariantOpacity, getVariantWidth } from "./helpers";
import { RequestStatus } from "@/type/ui";
import { AnswerStatus } from "./types";
import { colorVariantDict } from "./constants";

export interface GameQuestionProps {
  variant: Variant;
  testType: TestType;
  onImagePress: VoidFunction;
  onButtonPress: VoidFunction;
  selectedAnswerId: string | number | null;
  loadingStatus: RequestStatus;
  answerStatus: AnswerStatus;
}
export const GameVariant: FC<GameQuestionProps> = ({
  testType,
  variant,
  onImagePress,
  onButtonPress,
  loadingStatus,
  selectedAnswerId,
  answerStatus,
}) => {
  const { enName, image, primary, secondary } = getContents(
    VariantBlocksByTestType,
    testType,
    variant
  );

  console.log({ loadingStatus, answerStatus, selectedAnswerId });

  const {
    answer: { hasTextBlock, hasImage, grid, hasBgImage },
  } = gameUISettings[testType];

  const answerColor = colorVariantDict[answerStatus];

  return (
    <View
      style={[
        styles.container,
        {
          height: grid === "4*1" ? "23%" : "48%",
          width: getVariantWidth(grid),
          padding: hasBgImage ? 0 : indent.x1,
          backgroundColor: answerColor,
          borderColor: answerColor,
          opacity: getVariantOpacity(
            selectedAnswerId,
            loadingStatus,
            variant.id
          ),
          pointerEvents:
            Boolean(selectedAnswerId) || loadingStatus === "loading"
              ? "none"
              : "auto",
        },
      ]}
    >
      {Boolean(image) && (
        <VariantImageBlock
          image={image as string}
          onImagePress={onImagePress}
          testType={testType}
        />
      )}
      {hasTextBlock && (
        <CheckButton
          enName={enName}
          primary={primary}
          secondary={secondary}
          hasImage={Boolean(image)}
          onButtonPress={onButtonPress}
        />
      )}
      {hasImage && <ZoomButton onImagePress={onImagePress} />}
      {!hasTextBlock && <CheckIconButton onButtonPress={onButtonPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: radius.small,
    gap: indent.x1,
    overflow: "hidden",
  },
});

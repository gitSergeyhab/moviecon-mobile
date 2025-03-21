import { FC } from "react";
import { useSelector } from "react-redux";
import { VariantBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { gameSelectors } from "@/store/game";
import { getContents } from "@/lib/utils/game";
import { Dimensions, View, StyleSheet } from "react-native";
import { VariantImageBlock } from "./VariantImageBlock";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { gameUISettings } from "@/lib/configs/game/ui";
import { ZoomButton } from "./ZoomButton";
import { CheckIconButton } from "./CheckIconButton";
import { CheckButton } from "./CheckButton";

export interface GameQuestionProps {
  variant: Variant;
  testType: TestType;
  onImagePress: VoidFunction;
  onButtonPress: VoidFunction;
  selectedId: string | number | null;
  correctId: string | number | null;
}
export const GameVariant: FC<GameQuestionProps> = ({
  testType,
  variant,
  // selectedId,
  // correctId,
  onImagePress,
  onButtonPress,
}) => {
  const isAnswerDone = useSelector(gameSelectors.getIsAnswerDone);
  const loadingStatus = useSelector(gameSelectors.getLoadingStatus);
  const { enName, image, primary, secondary } = getContents(
    VariantBlocksByTestType,
    testType,
    variant
  );

  const {
    answer: { hasTextBlock, hasImage, grid, hasBgImage },
  } = gameUISettings[testType];

  return (
    <View
      style={[
        styles.container,
        {
          height: grid === "4*1" ? "24%" : "48%",
          width:
            grid === "4*1"
              ? "100%"
              : Dimensions.get("screen").width / 2 - indent.x3,
          padding: hasBgImage ? 0 : indent.x1,
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
    borderWidth: 1,
    borderRadius: radius.small,
    gap: indent.x1,
    overflow: "hidden",
  },
});

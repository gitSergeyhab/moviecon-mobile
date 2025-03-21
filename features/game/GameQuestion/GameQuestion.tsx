import { FC, useState } from "react";
import { QuestionBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { PrimaryTextBlock } from "@/shared/texts/PrimaryTextBlock";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { getContents } from "@/lib/utils/game";
import { ControlsSection } from "@/entities/game/ControlsSection";
import { testStyles } from "@/widgets/game/Game";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";
import { GameQuestionWithTextAndImage } from "./GameQuestionWithTextAndImage";
import { GameQuestionWithImage } from "./GameQuestionWithImage";
import { GameQuestionWithText } from "./GameQuestionWithText";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { GameQuestionImageModal } from "./GameQuestionImageModal";
import { GameQuestionWithSmallText } from "./GameQuestionWithSmallText";

export interface GameQuestionProps {
  variant: Variant;
  testType: TestType;
  questionText: string;
  // onImagePress: VoidFunction;
}
export const GameQuestion: FC<GameQuestionProps> = ({
  questionText,
  testType,
  variant,
  // onImagePress,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { enName, image, primary, secondary } = getContents(
    QuestionBlocksByTestType,
    testType,
    variant
  );

  const hideModal = () => setIsModalOpen(false);
  const showModal = () => setIsModalOpen(true);

  const {
    question: { type },
  } = testStyles[testType];

  return (
    <View
      style={{
        height: "auto",
        marginTop: indent.x1,
        gap: indent.x1,
      }}
    >
      <Text
        style={{
          fontSize: fontDict.subtitle,
          textAlign: "center",
          color: colorTheme.dark.text.accent,
        }}
      >
        {questionText}
      </Text>
      {type === "all" && (
        <GameQuestionWithTextAndImage
          image={image as string}
          onImagePress={showModal}
          primary={primary as string}
          enName={enName as string}
          secondary={secondary as string}
        />
      )}
      {type === "image" && (
        <GameQuestionWithImage
          image={image as string}
          onImagePress={showModal}
        />
      )}

      {type === "text" && (
        <GameQuestionWithText
          primary={primary as string}
          enName={enName as string}
          secondary={secondary as string}
        />
      )}
      {type === "smallText" && (
        <GameQuestionWithSmallText
          primary={primary as string}
          secondary={secondary as string}
        />
      )}
      <GameQuestionImageModal
        hideModal={hideModal}
        image={image as string}
        isModalOpen={isModalOpen}
      />
    </View>
  );
};

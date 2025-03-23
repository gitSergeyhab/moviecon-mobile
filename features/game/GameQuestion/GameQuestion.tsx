import { FC, useState } from "react";
import { QuestionBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { Text, View } from "react-native";
import { getContents } from "@/lib/utils/game";
import { GameQuestionWithTextAndImage } from "./GameQuestionWithTextAndImage";
import { GameQuestionWithImage } from "./GameQuestionWithImage";
import { GameQuestionWithText } from "./GameQuestionWithText";
import { GameQuestionImageModal } from "./GameQuestionImageModal";
import { GameQuestionWithSmallText } from "./GameQuestionWithSmallText";
import { styles } from "./styles";
import { gameUISettings } from "@/lib/configs/game/ui";

export interface GameQuestionProps {
  variant: Variant;
  testType: TestType;
  questionText: string;
}
export const GameQuestion: FC<GameQuestionProps> = ({
  questionText,
  testType,
  variant,
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
  } = gameUISettings[testType];

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{questionText}</Text>
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

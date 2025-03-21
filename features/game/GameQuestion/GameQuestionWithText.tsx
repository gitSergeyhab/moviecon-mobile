import { QuestionTextBlock } from "@/shared/texts/QuestionTextBlock";
import { FC } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export interface GameQuestionWithTextProps {
  primary: string;
  secondary?: string;
  enName?: string;
}
export const GameQuestionWithText: FC<GameQuestionWithTextProps> = ({
  primary,
  enName,
  secondary,
}) => {
  return (
    <View style={styles.questionWithTextContainer}>
      <QuestionTextBlock enText={enName} secondary={secondary} text={primary} />
    </View>
  );
};

import { cutString } from "@/lib/utils/string";
import { QuestionTextBlock } from "@/shared/texts/QuestionTextBlock";
import { FC } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export interface GameQuestionWithSmallTextProps {
  primary: string;
  secondary?: string;
}
export const GameQuestionWithSmallText: FC<GameQuestionWithSmallTextProps> = ({
  primary,
  secondary,
}) => {
  return (
    <View style={styles.questionWithSmallTextContainer}>
      <QuestionTextBlock secondary={secondary} text={cutString(primary, 36)} />
    </View>
  );
};

import { PrimaryTextBlock } from "@/shared/texts/PrimaryTextBlock";
import { QuestionTextBlock } from "@/shared/texts/QuestionTextBlock";
import { FC } from "react";
import { Dimensions, View } from "react-native";

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
    <View
      style={{
        width: "100%",
        height: Dimensions.get("screen").height / 8,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <QuestionTextBlock enText={enName} secondary={secondary} text={primary} />
    </View>
  );
};

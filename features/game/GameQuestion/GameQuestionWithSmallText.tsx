import { cutString } from "@/lib/utils/string";
import { QuestionTextBlock } from "@/shared/texts/QuestionTextBlock";
import { FC } from "react";
import { Dimensions, View } from "react-native";

export interface GameQuestionWithSmallTextProps {
  primary: string;
  secondary?: string;
}
export const GameQuestionWithSmallText: FC<GameQuestionWithSmallTextProps> = ({
  primary,
  secondary,
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: Dimensions.get("screen").height / 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <QuestionTextBlock secondary={secondary} text={cutString(primary, 36)} />
    </View>
  );
};

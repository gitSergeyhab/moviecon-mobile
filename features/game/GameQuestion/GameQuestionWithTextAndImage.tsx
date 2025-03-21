import { QuestionTextBlock } from "@/shared/texts/QuestionTextBlock";
import { FC } from "react";
import { Image, Pressable, View } from "react-native";
import { GameQuestionImageZoomButton } from "./GameQuestionImageZoomButton";

import { styles } from "./styles";

export interface GameQuestionWithTextAndImageProps {
  onImagePress: VoidFunction;
  primary: string;
  secondary?: string;
  enName?: string;
  image: string;
}
export const GameQuestionWithTextAndImage: FC<
  GameQuestionWithTextAndImageProps
> = ({ image, onImagePress, primary, enName, secondary }) => {
  return (
    <View style={styles.questionWithTextImageContainer}>
      <View style={{ width: "50%", alignItems: "flex-end" }}>
        <QuestionTextBlock
          enText={enName}
          secondary={secondary}
          text={primary}
        />
      </View>
      <Pressable
        onPress={onImagePress}
        style={styles.questionWithTextImagePressable}
      >
        <GameQuestionImageZoomButton onImagePress={onImagePress} />
        <Image
          source={{ uri: image }}
          alt=""
          resizeMode="contain"
          style={{
            height: "100%",
            width: "auto",
          }}
        />
      </Pressable>
    </View>
  );
};

import { FC } from "react";
import { Image, Pressable, View } from "react-native";
import { GameQuestionImageZoomButton } from "./GameQuestionImageZoomButton";
import { styles } from "./styles";

export interface GameQuestionWithImageProps {
  onImagePress: VoidFunction;
  image: string;
}
export const GameQuestionWithImage: FC<GameQuestionWithImageProps> = ({
  image,
  onImagePress,
}) => {
  return (
    <View style={styles.questionWithImageContainer}>
      <Pressable
        onPress={onImagePress}
        style={styles.questionWithImagePressable}
      >
        <Image
          source={{ uri: image }}
          alt=""
          resizeMode="contain"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <GameQuestionImageZoomButton onImagePress={onImagePress} />
      </Pressable>
    </View>
  );
};

import { FC } from "react";
import { Dimensions, Image, Pressable, View } from "react-native";
import { GameQuestionImageZoomButton } from "./GameQuestionImageZoomButton";

export interface GameQuestionWithImageProps {
  onImagePress: VoidFunction;
  image: string;
}
export const GameQuestionWithImage: FC<GameQuestionWithImageProps> = ({
  image,
  onImagePress,
}) => {
  return (
    <View
      style={{
        width: "100%",
        height: Dimensions.get("screen").height / 5,
      }}
    >
      <Pressable
        onPress={onImagePress}
        style={{ flex: 1, width: "100%", overflow: "hidden" }}
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

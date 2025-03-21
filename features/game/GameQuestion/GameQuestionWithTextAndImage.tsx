import { indent } from "@/lib/configs/ui/sizes";
import { QuestionTextBlock } from "@/shared/texts/QuestionTextBlock";
import { FC } from "react";
import { Dimensions, Image, Pressable, View } from "react-native";
import { GameQuestionImageZoomButton } from "./GameQuestionImageZoomButton";
import { ImageBackground } from "expo-image";
import { BlurView } from "expo-blur";

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
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: Dimensions.get("screen").height / 6,
        gap: indent.x2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "50%", alignItems: "flex-end" }}>
        <QuestionTextBlock
          enText={enName}
          secondary={secondary}
          text={primary}
        />
      </View>

      <Pressable
        onPress={onImagePress}
        style={{
          height: "100%",
          width: "50%",
          justifyContent: "center",
          overflow: "hidden",
        }}
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

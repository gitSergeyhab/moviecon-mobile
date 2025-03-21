import { FC } from "react";
import { TestType } from "@/type/game";

import { Image, Pressable, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import { testStyles } from "@/widgets/game/Game";

export interface VariantImageBlockProps {
  testType: TestType;
  onImagePress: VoidFunction;
  image: string;
}
export const VariantImageBlock: FC<VariantImageBlockProps> = ({
  image,
  testType,
  onImagePress,
}) => {
  const {
    answer: { hasBgImage, hasTextBlock },
  } = testStyles[testType];

  if (!hasBgImage) {
    return (
      <Pressable onPress={onImagePress} style={{ flex: 1, width: "100%" }}>
        <Image
          source={{ uri: image as string }}
          alt=""
          resizeMode="contain"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onImagePress} style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={{ uri: image as string }}
        alt=""
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <BlurView
          intensity={60}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />

        <Image
          source={{ uri: image as string }}
          alt=""
          resizeMode="contain"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </ImageBackground>
    </Pressable>
  );
};

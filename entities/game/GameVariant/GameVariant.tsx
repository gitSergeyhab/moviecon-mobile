import { FC, useContext } from "react";
import { useSelector } from "react-redux";
import { VariantBlocksByTestType } from "@/lib/configs/game/config";
import { TestType, Variant } from "@/type/game";
import { gameSelectors } from "@/store/game";
import { getContents } from "@/lib/utils/game";
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { PrimaryTextBlock } from "@/shared/texts/PrimaryTextBlock";
import { BlurView } from "expo-blur";
import { VariantImageBlock } from "./VariantImageBlock";
import { testStyles } from "@/widgets/game/Game";
import { Button } from "@/shared/components/Button/Button";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { cutString } from "@/lib/utils/string";
import { fontDict } from "@/lib/configs/ui/fonts";
import { IconButton } from "@/shared/components/Button/IconButton";
import ThemeContext from "@/lib/providers/ThemeProvider";

export interface GameQuestionProps {
  variant: Variant;
  testType: TestType;
  onImagePress: VoidFunction;
  onButtonPress: VoidFunction;
  selectedId: string | number | null;
  correctId: string | number | null;
}
export const GameVariant: FC<GameQuestionProps> = ({
  testType,
  variant,
  // selectedId,
  // correctId,
  onImagePress,
  onButtonPress,
}) => {
  const { theme } = useContext(ThemeContext);
  const isAnswerDone = useSelector(gameSelectors.getIsAnswerDone);
  const loadingStatus = useSelector(gameSelectors.getLoadingStatus);
  const { enName, image, primary, secondary } = getContents(
    VariantBlocksByTestType,
    testType,
    variant
  );

  const {
    answer: { hasTextBlock, hasImage, height, hasBgImage },
  } = testStyles[testType];

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: testStyles[testType].answer.grid === "4*1" ? "24%" : "48%",
        width:
          testStyles[testType].answer.grid === "4*1"
            ? "100%"
            : Dimensions.get("screen").width / 2 - indent.x3,
        borderWidth: 1,
        borderRadius: radius.small,
        padding: hasBgImage ? 0 : indent.x1,
        gap: indent.x1,
        overflow: "hidden",
      }}
    >
      {Boolean(image) && (
        <VariantImageBlock
          image={image as string}
          onImagePress={onImagePress}
          testType={testType}
        />
      )}

      {hasTextBlock && (
        <View style={{ width: "100%" }}>
          <Button variant="secondary" size="small" onPress={onButtonPress}>
            {hasImage ? (
              cutString(primary as string, 32)
            ) : (
              <PrimaryTextBlock
                text={primary}
                enText={enName}
                secondary={secondary}
              />
            )}
          </Button>
        </View>
      )}
      {hasImage && (
        <>
          <View
            style={{
              position: "absolute",
              top: -40,
              left: -40,
              width: 100,
              height: 100,
              backgroundColor: theme === "dark" ? "#000" : "#fff",
              borderRadius: radius.circle,
              opacity: 0.5,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: 1,
              left: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <IconButton name="zoom-in" size={45} onPress={onImagePress} />
          </View>
        </>
      )}

      {!hasTextBlock && (
        <>
          <View
            style={{
              position: "absolute",
              bottom: -55,
              right: -55,
              width: 150,
              height: 150,
              backgroundColor: theme === "dark" ? "#000" : "#fff",
              borderRadius: radius.circle,
              opacity: 0.5,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
            }}
          >
            <IconButton name="check-circle" size={60} onPress={onButtonPress} />
          </View>
        </>
      )}
    </View>
  );
};

import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "auto",
    marginTop: indent.x1,
    gap: indent.x1,
  },
  mainText: {
    fontSize: fontDict.subtitle,
    textAlign: "center",
    color: colorTheme.dark.text.accent,
  },
  modalContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    gap: indent.x2,
  },
  iconButtonWrapper: {
    top: 10,
    right: 10,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.circle,
    zIndex: 10,
  },
  zoomButtonContainer: {
    position: "absolute",
    bottom: -60,
    left: "50%",
    width: 70,
    height: 90,
    borderRadius: radius.circle,
    opacity: 0.5,
    justifyContent: "flex-start",
    transform: [{ translateX: -35 }],
    zIndex: 10,
  },
  zoomButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    zIndex: 11,
  },
  questionWithImageContainer: {
    width: "100%",
    height: Dimensions.get("screen").height / 5,
  },
  questionWithImagePressable: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  questionWithSmallTextContainer: {
    width: "100%",
    height: Dimensions.get("screen").height / 16,
    justifyContent: "center",
    alignItems: "center",
  },
  questionWithTextContainer: {
    width: "100%",
    height: Dimensions.get("screen").height / 8,
    justifyContent: "center",
    alignItems: "center",
  },
  questionWithTextImageContainer: {
    flexDirection: "row",
    width: "100%",
    height: Dimensions.get("screen").height / 6,
    gap: indent.x2,
    justifyContent: "center",
    alignItems: "center",
  },
  questionWithTextImagePressable: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
    overflow: "hidden",
  },
});

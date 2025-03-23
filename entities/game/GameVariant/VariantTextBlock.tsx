import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { FC, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

interface PrimaryTextBlockProps {
  text?: string | number | null;
  enText?: string | null | number;
  secondary?: string | number | null;
  isInBtn?: boolean;
}

export const PrimaryTextBlock: FC<PrimaryTextBlockProps> = ({
  text,
  enText,
  secondary,
  isInBtn = true,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.firstText,
          {
            color: isInBtn
              ? colorTheme[theme].buttonText.primary
              : colorTheme[theme].text.primary,
          },
        ]}
      >
        {text}
      </Text>
      {enText && (
        <Text
          style={[
            styles.secondText,
            {
              color: isInBtn
                ? colorTheme[theme].buttonText.primary
                : colorTheme[theme].text.primary,
            },
          ]}
        >
          {enText} {secondary ? `(${secondary})` : ""}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: indent.x1,
    alignItems: "center",
    textAlign: "center",
  },
  firstText: {
    fontSize: fontDict.default,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
  },
  secondText: {
    fontSize: fontDict.small,
    alignItems: "center",
    textAlign: "center",
  },
});

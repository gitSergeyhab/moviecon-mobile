import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent } from "@/lib/configs/ui/sizes";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { cutString } from "@/lib/utils/string";
import { FC, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

interface QuestionTextBlockProps {
  text?: string | number | null;
  enText?: string | null | number;
  secondary?: string | number | null;
}

export const QuestionTextBlock: FC<QuestionTextBlockProps> = ({
  text,
  enText,
  secondary,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text
        style={[styles.firstText, { color: colorTheme[theme].text.primary }]}
      >
        {text}
      </Text>
      {enText && (
        <Text
          style={{
            ...styles.secondText,
            color: colorTheme[theme].text.primary,
          }}
        >
          {enText}
        </Text>
      )}

      {secondary && (
        <Text
          style={{
            ...styles.secondText,
            color: colorTheme[theme].text.primary,
          }}
        >
          {cutString(secondary as string, 32)}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: indent.x1,
    alignItems: "center",
    textAlign: "center",
    gap: indent.x1,
  },
  firstText: {
    fontSize: fontDict.subtitle,
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

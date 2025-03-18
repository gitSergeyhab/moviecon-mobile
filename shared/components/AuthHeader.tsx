import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import { indent, radius } from "@/lib/configs/ui/sizes";
import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export interface AuthHeaderProps {
  text: string;
}
export const AuthHeader: FC<AuthHeaderProps> = ({ text }) => {
  return (
    <View style={styles.titleWr}>
      <Text style={styles.title}>{text}</Text>
      <Image
        style={styles.image}
        source={require("@/assets/images/png/auth.png")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleWr: {
    alignItems: "center",
    justifyContent: "center",
    gap: indent.x4,
    backgroundColor: colorTheme.light.background.primary,
    borderRadius: radius.medium,
    flexDirection: "row",
    padding: indent.x1,
    borderWidth: 2,
    borderColor: colorTheme.light.border.accent,
    elevation: 10,
  },
  title: {
    fontSize: fontDict.subtitle,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 30,
    height: 30,
  },
});

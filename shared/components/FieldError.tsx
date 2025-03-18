import { fontDict } from "@/lib/configs/ui/fonts";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export interface FieldErrorProps {
  error?: string;
}

export const FieldError: FC<FieldErrorProps> = ({ error }) => {
  if (!error) return null;
  return (
    <View style={styles.OuterWrapper}>
      <Text style={styles.ErrorText}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  OuterWrapper: {
    height: 0,
    width: "100%",
  },
  ErrorText: {
    height: 24,
    fontWeight: "700",
    fontSize: fontDict.small,
    width: "100%",
    color: "red",
    position: "absolute",
  },
});

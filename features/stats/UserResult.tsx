import { BlockError } from "@/entities/BlockError/BlockError";
import { BlockLoader } from "@/entities/BlockLoader/BlockLoader";
import { useGetAppTheme } from "@/hooks/useGetAppTheme";
import { useQueryUserRecordsByParams } from "@/hooks/useQueryUserRecordsByParams";
import { GameCategory, GameDuration } from "@/type/game";
import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export interface UserResultProps {
  category: GameCategory;
  duration: GameDuration;
}

export const UserResult: FC<UserResultProps> = ({ category, duration }) => {
  const { isError, isLoading, userRecords } = useQueryUserRecordsByParams({
    duration,
    category,
  });

  const theme = useGetAppTheme();

  if (isLoading) {
    return <BlockLoader height={40} />;
  }

  if (isError) {
    return <BlockError height={40} text="Не удалось загрузить данные" />;
  }

  return (
    <View style={styles.userResultContainer}>
      <Text
        style={[
          styles.userResultText,
          {
            color: theme.text.primary,
          },
        ]}
      >
        Ваш рекорд
      </Text>
      <Text style={styles.userResultValue}>{userRecords?.score || "-"}</Text>
    </View>
  );
};

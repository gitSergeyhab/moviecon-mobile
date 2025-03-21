import { FC, useContext } from "react";
import { InfoBarIcons } from "./InfoBarIcon";
import { Text, View } from "react-native";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";
import { Level } from "@/type/game";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { styles } from "./styles";

export const InfoBar: FC = () => {
  // const levelInfo = useSelector(gameSelectors.getLevelInfo);
  // const testIndex = useSelector(gameSelectors.getCurrentTestIndex);
  // const madeErrors = useSelector(gameSelectors.getMadeErrors);
  // const madeSkips = useSelector(gameSelectors.getMadeSkips);
  // const levelsCount = useSelector(gameSelectors.getLevelsCount);
  const levelInfo: Level | null = {
    errors: 8,
    number: 1,
    questions: 6,
    skips: 8,
    time: 100,
  };
  const testIndex = 2;
  const madeErrors = 1;
  const madeSkips = 1;
  const levelsCount = 4;

  const { theme } = useContext(ThemeContext);

  if (levelInfo === null) {
    console.error("невозможно получить статус вопроса");
    return <Text>невозможно получить данные уровня</Text>;
  }

  const { errors, number, questions, skips } = levelInfo;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconsWrapper}>
          <InfoBarIcons count={madeErrors} type="star" />
          <InfoBarIcons
            count={Math.max(errors - madeErrors, 0)}
            isActive
            type="star"
          />
        </View>
        <View style={styles.iconsWrapper}>
          <InfoBarIcons count={madeSkips} type="skip" />
          <InfoBarIcons
            count={Math.max(skips - madeSkips, 0)}
            isActive
            type="skip"
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.iconsWrapper}>
          <IconSymbol
            name="gpp-good"
            size={16}
            color={colorTheme[theme].text.primary}
          />
          <Text style={{ color: colorTheme[theme].text.primary }}>
            {testIndex + 1} / {questions}
          </Text>
        </View>

        <View style={styles.iconsWrapper}>
          <Text style={{ color: colorTheme[theme].text.primary }}>
            lvl {number} / {levelsCount}
          </Text>
        </View>
      </View>
    </>
  );
};

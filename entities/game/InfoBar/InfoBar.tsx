import { FC, useContext } from "react";
import { InfoBarIcons } from "./InfoBarIcon";
import { Text, View } from "react-native";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { gameSelectors } from "@/store/game";
import { showToast } from "@/lib/utils/toasts";

export const InfoBar: FC = () => {
  const levelInfo = useSelector(gameSelectors.getLevelInfo);
  const testIndex = useSelector(gameSelectors.getCurrentTestIndex);
  const madeErrors = useSelector(gameSelectors.getMadeErrors);
  const madeSkips = useSelector(gameSelectors.getMadeSkips);
  const levelsCount = useSelector(gameSelectors.getLevelsCount);

  const { theme } = useContext(ThemeContext);

  if (levelInfo === null) {
    showToast({ message: "невозможно получить статус вопроса" });
    return null;
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

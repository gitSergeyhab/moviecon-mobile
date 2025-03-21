import { useLogout } from "@/hooks/useLogout";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import { fontDict } from "@/lib/configs/ui/fonts";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { cutString } from "@/lib/utils/string";
import { IconButton } from "@/shared/components/Button/IconButton";
import { userSelectors } from "@/store/user";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export const TopUserBlock = () => {
  const user = useSelector(userSelectors.getUser);
  const logout = useLogout();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colorTheme[theme].background.secondary,
      }}
    >
      <IconButton onPress={logout} size={24} name="logout" />
      <Text style={{ ...styles.user, color: colorTheme[theme].text.accent }}>
        {cutString(user?.name || "")}
      </Text>
      <IconButton
        onPress={toggleTheme}
        size={28}
        name={theme === "light" ? "dark-mode" : "light-mode"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colorTheme.light.border.accent,
    height: 48,
    paddingHorizontal: 12,
  },
  user: {
    fontWeight: "bold",
    fontSize: fontDict.default,
  },
});

import { useLogout } from "@/hooks/useLogout";
import { colorTheme } from "@/lib/configs/ui/colorTheme";
import ThemeContext from "@/lib/providers/ThemeProvider";
import { IconButton } from "@/shared/components/Button/IconButton";
import { IconSymbol } from "@/shared/components/ui/IconSymbol";
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
      <View style={styles.left}>
        <IconSymbol size={28} name="supervised-user-circle" color={"#59d109"} />
        <Text>{user?.name || "no user"}</Text>
        <Text>{theme || "no theme"}</Text>
        <IconButton
          onPress={toggleTheme}
          size={28}
          name={theme === "light" ? "dark-mode" : "light-mode"}
        />
      </View>
      <IconButton onPress={logout} size={24} name="logout" />
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
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme } from "@/type/ui";

const THEME_KEY = "movie-con-theme";

class ThemeService {
  static async getTheme() {
    return (await AsyncStorage.getItem(THEME_KEY)) as Theme | null;
  }

  static async setTheme(theme: Theme) {
    await AsyncStorage.setItem(THEME_KEY, theme);
  }
}

export default ThemeService;

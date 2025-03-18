import { UserTokens } from "@/type/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTokens = async ({ access, refresh }: UserTokens) => {
  try {
    await AsyncStorage.setItem("accessToken", access);
    await AsyncStorage.setItem("refreshToken", refresh);
  } catch (error) {
    console.error("Ошибка при сохранении токенов:", error);
  }
};

export const getTokens = async () => {
  try {
    const accessToken = await AsyncStorage.getItem("accessToken");
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Ошибка при получении токенов:", error);
    return null;
  }
};

export const clearTokens = async () => {
  try {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");
  } catch (error) {
    console.error("Ошибка при удалении токенов:", error);
  }
};

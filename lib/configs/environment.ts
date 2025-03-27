import Constants from "expo-constants";

const apiBaseUrl =
  Constants.manifest2?.extra?.apiUrl || "TODO: replace with your api url!!!";

export const ENV = { apiBaseUrl };

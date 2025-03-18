import AsyncStorage from "@react-native-async-storage/async-storage";
const IMAGES_MODE_KEY = "movie-con-loading-images";

class LoadingImagesService {
  static async getMode() {
    return Boolean(await AsyncStorage.getItem(IMAGES_MODE_KEY));
  }

  static setMode(mode: boolean) {
    AsyncStorage.setItem(IMAGES_MODE_KEY, mode ? "1" : "");
  }
}

export default LoadingImagesService;

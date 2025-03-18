import {
  launchImageLibraryAsync,
  PermissionStatus,
  useMediaLibraryPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Alert } from "react-native";

const pickImage = async () => {
  const result = await launchImageLibraryAsync({
    mediaTypes: "images",
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.7,
  });

  console.log({ result });

  return result;
};

export const useMedia = () => {
  const [image, setImage] = useState<string | null>(null);

  const [mediaPermission, requestMediaPermission] =
    useMediaLibraryPermissions();

  const checkMediaPermission = async () => {
    if (mediaPermission?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Недостаточно прав",
        "Пожалуйста, включите доступ к медиа в настройках"
      );
      return false;
    }
    if (mediaPermission?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestMediaPermission();
      return permissionResponse.granted;
    }
    return true;
  };

  const handleMediaOn = async () => {
    const hasPermission = await checkMediaPermission();
    if (!hasPermission) return;
    const result = await pickImage();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return {
    image,
    handleMediaOn,
  };
};

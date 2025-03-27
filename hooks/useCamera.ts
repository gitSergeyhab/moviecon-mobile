import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Alert } from "react-native";

const pickImage = async () => {
  const result = await launchCameraAsync({
    mediaTypes: "images",
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.7,
  });

  return result;
};

export const useCamera = () => {
  const [photo, setPhoto] = useState<string | null>(null);

  const [cameraPermission, requestCameraPermission] = useCameraPermissions();

  const checkCameraPermission = async () => {
    if (cameraPermission?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Недостаточно прав",
        "Пожалуйста, включите доступ к камере в настройках"
      );
      return false;
    }
    if (cameraPermission?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermission();
      return permissionResponse.granted;
    }
    return true;
  };

  const handleCameraOn = async () => {
    const hasPermission = await checkCameraPermission();
    if (!hasPermission) return;
    const result = await pickImage();
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return {
    photo,
    handleCameraOn,
  };
};

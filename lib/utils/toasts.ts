import Toast, { ToastType } from "react-native-toast-message";

export interface ToastProps {
  message: string;
  description?: string;
  type?: ToastType;
}
export const showToast = ({
  message,
  type = "error",
  description = "Пожалуйста, попробуйте позже",
}: ToastProps) => {
  Toast.show({
    type,
    text1: message,
    text2: description,
  });
};

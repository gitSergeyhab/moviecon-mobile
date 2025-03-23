import { useGetAppTheme } from "./useGetAppTheme";

export const useGetDefaultTableStyle = () => {
  const theme = useGetAppTheme();
  return {
    cellStyle: {
      backgroundColor: theme.background.primary,
    },
    headerStyle: {
      backgroundColor: theme.background.secondary,
    },
    headerTextStyle: { color: theme.text.accent },
    cellTextStyle: { color: theme.text.primary },
    borderColor: "transparent",
  };
};

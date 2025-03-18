export type FontSize =
  | "tiny"
  | "small"
  | "default"
  | "subtitle"
  | "title"
  | "header";

export const fontDict: Record<FontSize, number> = {
  tiny: 10,
  small: 12,
  default: 16,
  subtitle: 20,
  title: 24,
  header: 28,
};

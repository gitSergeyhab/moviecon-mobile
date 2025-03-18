export type Indent = "x0" | "x1" | "x2" | "x3" | "x4" | "x5" | "x6" | "x7";

export type RadiusSizes = keyof typeof radius;

export const radius = {
  small: 4,
  medium: 8,
  large: 12,
  xLarge: 16,
  xxLarge: 20,
  circle: "50%",
};

export const indent: Record<Indent, number> = {
  x0: 0,
  x1: 4,
  x2: 8,
  x3: 12,
  x4: 16,
  x5: 20,
  x6: 24,
  x7: 28,
};

import { OutputColorRangeDict, Theme } from "@/type/ui";

export const outputColorRangeDictExit: OutputColorRangeDict = {
  light: ["#d6cac8", "#da1305"],
  dark: ["#aa1a00", "#da1305"],
};
export const outputColorRangeDictNext: OutputColorRangeDict = {
  light: ["#e79c10", "#f8e806"],
  dark: ["#e79c10", "#f8e806"],
};

export const exitBtnBg: Record<Theme, string> = {
  dark: "#fff",
  light: "#690c00",
};

export const nexBtnBg: Record<Theme, string> = {
  dark: "#fff",
  light: "#666666",
};

import { AnswerStatus } from "./types";

export const colorVariantDict: Record<AnswerStatus, string> = {
  default: "#000000",
  selectedNotChecked: "#e5f502",
  selectedRight: "#247c28",
  selectedWrong: "#ff0000",
  notSelectedRight: "#001aff",
};

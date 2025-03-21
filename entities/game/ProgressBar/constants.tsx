import { AnswerStatus } from "@/type/game";

export const colorDict: Record<AnswerStatus, string> = {
  correct: "#247c28",
  skipped: "#4d4d4d",
  wrong: "#ff0000",
  none: "#f1f7ff",
};

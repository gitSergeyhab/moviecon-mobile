import { GameCategory, GameDuration } from "@/type/game";
import {
  categoryTranslate,
  durationTranslate,
} from "../../shared/constants/game";

export type DurationTabTata = { label: string; value: GameDuration };
export type CategoryTabTata = { label: string; value: GameCategory };

export const durationTabData: DurationTabTata[] = [
  { label: durationTranslate["QUICK"], value: "QUICK" },
  { label: durationTranslate["COMMON"], value: "COMMON" },
  { label: durationTranslate["LONG"], value: "LONG" },
];
export const defaultDuration = durationTabData[1].value;

export const categoryTabData: CategoryTabTata[] = [
  { label: categoryTranslate["all"], value: "all" },
  { label: categoryTranslate["world"], value: "world" },
  { label: categoryTranslate["ussr"], value: "ussr" },
  { label: categoryTranslate["rus"], value: "rus" },
];

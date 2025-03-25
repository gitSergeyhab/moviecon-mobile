import { GameCategory, GameDuration } from "@/type/game";

type CategoryTranslate = Record<GameCategory, string>;
type DurationTranslate = Record<GameDuration, string>;

export const categoryTranslate: CategoryTranslate = {
  all: "Все фильмы",
  ussr: "Советское кино",
  rus: "Российское кино",
  world: "Мировое кино",
};

export const durationTranslate: DurationTranslate = {
  QUICK: "Быстрая игра",
  COMMON: "Стандартная игра",
  LONG: "Большая игра",
};

export type GameResultStatus = "WON" | "LOST" | "ENDED";
export const statusTranslate: Record<GameResultStatus, string> = {
  WON: "Победа",
  LOST: "Поражение",
  ENDED: "Прервана",
};

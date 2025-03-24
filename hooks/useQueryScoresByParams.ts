import { GameCategory, GameDuration } from "@/type/game";
import { useQueryScores } from "./useQueryScores";

export type ScoresByParamsArgs = {
  category: GameCategory;
  duration: GameDuration;
};

export const useQueryScoresByParams = ({
  category,
  duration,
}: ScoresByParamsArgs) => {
  const { scoresData, isLoading, isError } = useQueryScores();

  if (!scoresData) {
    return { scores: [], isLoading, isError };
  }

  const scores = scoresData.find(
    ({ params }) => params.category === category && params.duration === duration
  );
  return { scores: scores?.scores, isLoading, isError };
};

import { requestUserRecords$ } from "@/lib/api/gameResult";
import { toDayMonthYearTime } from "@/lib/utils/date";
import { categoryTranslate, statusTranslate } from "@/shared/constants/game";
import { GameResult } from "@/type/game-results";
import { useQuery } from "@tanstack/react-query";

const convertResultToTableData = (result: GameResult) => [
  toDayMonthYearTime(result.createdAt),
  result.score,
  categoryTranslate[result.category],
  statusTranslate[result.status],
];

export const useQueryUserRecords = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user-records"],
    queryFn: requestUserRecords$,
  });
  return { userRecords: data, isLoading, isError };
};

export const useQueryUserRecordsSplitByDuration = () => {
  const { userRecords, isLoading, isError } = useQueryUserRecords();

  if (!userRecords) {
    return { userRecords: undefined, isLoading, isError };
  }

  const longGames = userRecords
    .filter(({ params }) => params.duration === "LONG")
    .map(({ bestResult }) => convertResultToTableData(bestResult));
  const quickGames = userRecords
    .filter(({ params }) => params.duration === "QUICK")
    .map(({ bestResult }) => convertResultToTableData(bestResult));
  const commonGames = userRecords
    .filter(({ params }) => params.duration === "COMMON")
    .map(({ bestResult }) => convertResultToTableData(bestResult));
  return { longGames, quickGames, commonGames, isLoading, isError };
};

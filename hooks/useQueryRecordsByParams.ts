import { GameCategory, GameDuration } from "@/type/game";
import { useQueryRecords } from "./useQueryRecords";

export type QueryRecordsByParamsArgs = {
  category: GameCategory;
  duration: GameDuration;
  limit?: number;
};
export const useQueryRecordsByParams = ({
  category,
  duration,
  limit,
}: QueryRecordsByParamsArgs) => {
  const { records, isLoading, isError } = useQueryRecords(limit);

  if (!records) {
    return { records: [], isLoading, isError };
  }

  const record = records.find(
    ({ params }) => params.category === category && params.duration === duration
  );

  return {
    records: record?.bestResult,
    isLoading,
    isError,
  };
};

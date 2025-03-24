import { GameCategory, GameDuration } from "@/type/game";
import { useQueryUserRecords } from "./useQueryUserRecords";

export type UserRecordsByParamsArgs = {
  category: GameCategory;
  duration: GameDuration;
};

export const useQueryUserRecordsByParams = ({
  category,
  duration,
}: UserRecordsByParamsArgs) => {
  const { userRecords, isLoading, isError } = useQueryUserRecords();

  if (!userRecords) {
    return { userRecords: undefined, isLoading, isError };
  }

  const records = userRecords.find(
    ({ params }) => params.category === category && params.duration === duration
  );
  return { userRecords: records?.bestResult, isLoading, isError };
};

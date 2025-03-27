import { useEffect, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { GameCategory, GameDuration, GameType } from "@/type/game";
import { GameResult } from "@/type/game-results";
import { request } from "@/lib/api";

export interface UserResultsQuery {
  limit: number;
  sort: "1" | "-1";
  category: GameCategory | "none";
  type: GameType;
  duration: GameDuration | "none";
}

const filterParams = (
  params: Partial<UserResultsQuery>
): Partial<UserResultsQuery> => {
  const filteredQuery: Partial<UserResultsQuery> = {};
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "none") {
      // @ts-ignore
      filteredQuery[key] = value;
    }
  });
  return filteredQuery;
};

export const requestUserResults$ = (
  query: Partial<UserResultsQuery>
): Promise<{ results: GameResult[]; totalCount: number }> =>
  request.get("/game-result/user-top", { params: filterParams(query) });

export const useQueryUserResults = (
  params: UserResultsQuery & { offset: number }
) => {
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["user-results", params],
    queryFn: () => requestUserResults$(params),
    placeholderData: keepPreviousData,
  });

  return {
    userResults: data?.results || [],
    isError,
    isLoading,
    isFetching,
    count: data?.totalCount || 0,
  };
};

export const useQueryUserResultsByLoadMore = (params: UserResultsQuery) => {
  const [allResults, setAllResults] = useState<GameResult[]>([]);
  const [offset, setOffset] = useState(0);

  const { userResults, isError, isLoading, count, isFetching } =
    useQueryUserResults({
      ...params,
      offset,
    });

  useEffect(() => {
    if (userResults) {
      setAllResults((prev) => [...prev.slice(0, offset), ...userResults]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userResults]);

  return {
    results: allResults,
    isError,
    isLoading,
    isFetching,
    count,
    setOffset,
  };
};

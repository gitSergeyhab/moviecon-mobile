import { requestScores$ } from "@/lib/api/gameResult";
import { useQuery } from "@tanstack/react-query";

export const useQueryScores = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["scores"],
    queryFn: requestScores$,
  });
  return { makeShareableCloneRecursive: data, isLoading, isError };
};

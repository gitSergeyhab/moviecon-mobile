import { requestRecords$ } from "@/lib/api/gameResult";
import { useQuery } from "@tanstack/react-query";

export const useQueryRecords = (limit = 5) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["records", limit],
    queryFn: () => requestRecords$(limit),
  });
  return { records: data, isLoading, isError };
};

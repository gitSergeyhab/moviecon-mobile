import { requestUserRecords$ } from "@/lib/api/gameResult";
import { useQuery } from "@tanstack/react-query";

export const useQueryUserRecords = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user-records"],
    queryFn: requestUserRecords$,
  });
  return { userRecords: data, isLoading, isError };
};

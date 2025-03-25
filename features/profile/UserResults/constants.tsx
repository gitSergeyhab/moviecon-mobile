import { UserResultsQuery } from "@/hooks/useQueryUserResult";

export const tableHeaderColumns = ["Дата", "Счет", "Результат"];
export const tableColumnWidths = [50, 25, 25];

export const defaultQuery: UserResultsQuery = {
  // offset: 0,
  limit: 5,
  sort: "-1",
  category: "none",
  duration: "none",
  type: "SINGLE",
};

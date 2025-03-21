import { z } from "zod";

const category = z.enum(["ussr", "rus", "world", "all"], {
  message: "выберете категорию из списка",
});

const duration = z.enum(["COMMON", "QUICK", "LONG"], {
  message: "выберете длительность из списка",
});

export const gameSelectionSchema = z.object({
  category,
  duration,
});

export type GameSelectionSchemaType = z.infer<typeof gameSelectionSchema>;

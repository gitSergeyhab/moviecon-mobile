import { request } from ".";
import {
  GameAggregateRecord,
  UserAggregateRecords,
  GameAggregateScores,
} from "@/type/game-results";

const url = "/game-result/";

const getUrl = (path: string) => `${url}${path}`;

export const requestUserRecords$ = (): Promise<UserAggregateRecords[]> =>
  request.get(getUrl("user-best/"));

export const requestRecords$ = (
  limit: number
): Promise<GameAggregateRecord[]> =>
  request.get(getUrl(`records?limit=${limit}`));

export const requestScores$ = (): Promise<GameAggregateScores[]> =>
  request.get(getUrl(`scores`));

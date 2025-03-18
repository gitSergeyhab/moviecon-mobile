import axios from "axios";
import { handledRequest } from "../utils/errors";
import { UserTokens } from "@/type/user";
import { ENV } from "../configs/environment";
import { getTokens } from "../utils/storage/tokens";

const requestTokens$ = (refresh: string): Promise<{ data: UserTokens }> =>
  axios.post(`${ENV.apiBaseUrl}/auth/refresh-tokens/`, { refresh });

const requestTokens = handledRequest(
  requestTokens$,
  "не возможно обновить токены, попробуйте войти через логин",
  null
);

export const refreshToken = async (): Promise<UserTokens | null> => {
  const tokens = await getTokens();

  if (!tokens || !tokens.refreshToken) {
    console.error("refresh token не найден");
    return null;
  }
  const response = await requestTokens(tokens.refreshToken);
  if (!response) return null;
  return response.data;
};

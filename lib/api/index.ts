import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { ApiError, ApiResponse, AppApi } from "@/type/api";
import { ENV } from "@/lib/configs/environment";
import { getErrorMessage } from "../utils/errors";
import { refreshToken } from "./refreshToken";
import appRoutes from "../configs/routes/routes";
import { clearTokens, getTokens, saveTokens } from "../utils/storage/tokens";
import { router } from "expo-router";

interface ErrorConfig extends InternalAxiosRequestConfig {
  is401: boolean;
}
const defaultHeaders = {
  "Content-type": "application/json",
};

const createRequestInstance = (addAuthHeader: boolean): AppApi => {
  const instance = axios.create({
    baseURL: ENV.apiBaseUrl,
    headers: defaultHeaders,
  });

  if (addAuthHeader) {
    instance.interceptors.request.use(async (request) => {
      const tokens = await getTokens();
      request.headers["Authorization"] = `Bearer ${tokens?.accessToken}`;
      return request;
    });
  }
  instance.interceptors.response.use(
    (response) => response.data,
    async (error: AxiosError) => {
      const { response, config } = error as {
        response: ApiResponse;
        config: InternalAxiosRequestConfig;
      };

      const { data, status } = response;
      const errors = data?.errors || [];

      const errorMessage = getErrorMessage(response);

      if (status === 401) {
        const tokens = await refreshToken();
        const requestParams = config as ErrorConfig;

        if (!tokens || requestParams.is401) {
          clearTokens();
          router.replace(appRoutes.auth.login);
          return;
        }

        requestParams.is401 = true;
        if (tokens) {
          await saveTokens(tokens);
        }
        return await instance.request(requestParams);
      }

      const apiError: ApiError = {
        message: errorMessage || "",
        status,
        errors,
      };
      throw apiError;
    }
  );
  return instance as AppApi;
};

export const request = createRequestInstance(true);
export const noAuthRequest = createRequestInstance(false);

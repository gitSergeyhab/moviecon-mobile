import { requestLogin$ } from "@/lib/api/auth";
import { saveTokens } from "@/lib/utils/storage/tokens";
import { LoginSchemaType } from "@/shared/schemas/login";
import { userActions } from "@/store/user";
import { useAppDispatch } from "./useAppDispatch";
import { useState } from "react";
import { RequestStatus } from "@/type/ui";
import { setFormErrors } from "@/lib/utils/errors";
import { ApiError } from "@/type/api";
import { UseFormSetError } from "react-hook-form";
import { router } from "expo-router";
import { StringDict } from "@/type/common";

export const useLogin = <T extends StringDict>(
  setError: UseFormSetError<T>
) => {
  const [status, setStatus] = useState<RequestStatus>("idle");

  const dispatch = useAppDispatch();

  const login = (data: LoginSchemaType) => {
    setStatus("loading");
    requestLogin$(data)
      .then((response) => {
        if (response) {
          const { tokens, ...user } = response;
          dispatch(userActions.setUser(user));
          saveTokens(tokens);
          setStatus("success");
          router.replace("/");
        }
      })
      .catch((error) => {
        setStatus("failed");
        setFormErrors(error as ApiError, setError);
      });
  };

  return { login, status };
};

import { requestRegister$ } from "@/lib/api/auth";
import { saveTokens } from "@/lib/utils/storage/tokens";
import { userActions } from "@/store/user";
import { useAppDispatch } from "./useAppDispatch";
import { useState } from "react";
import { RequestStatus } from "@/type/ui";
import { setFormErrors } from "@/lib/utils/errors";
import { ApiError } from "@/type/api";
import { UseFormSetError } from "react-hook-form";
import { router } from "expo-router";
import { StringDict } from "@/type/common";
import { RegisterSchemaType } from "@/shared/schemas/register";

export const useRegister = <T extends StringDict>(
  setError: UseFormSetError<T>
) => {
  const [status, setStatus] = useState<RequestStatus>("idle");

  const dispatch = useAppDispatch();

  const register = (data: RegisterSchemaType) => {
    setStatus("loading");
    requestRegister$(data)
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

  return { register, status };
};

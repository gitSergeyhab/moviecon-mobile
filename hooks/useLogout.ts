import { userActions } from "@/store/user";
import { useAppDispatch } from "./useAppDispatch";
import { clearTokens } from "@/lib/utils/storage/tokens";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userActions.clearUser());
    clearTokens();
  };
  return logout;
};

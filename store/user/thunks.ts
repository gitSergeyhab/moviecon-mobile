import { ThunkFn } from "@/type/store";
import { requestUser$ } from "@/lib/api/auth";
import { userActions } from "./";
import { getTokens } from "@/lib/utils/storage/tokens";

export const fetchUser = (): ThunkFn => async (dispatch) => {
  const tokens = await getTokens();
  const token = tokens?.accessToken;
  if (!token) return;
  try {
    dispatch(userActions.setLoadingStatus("loading"));
    const user = await requestUser$();
    dispatch(userActions.setUser(user));
    dispatch(userActions.setLoadingStatus("success"));
  } catch (e) {
    console.error(e);
    dispatch(userActions.setLoadingStatus("failed"));
  }
};

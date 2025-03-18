import { UserInfo } from "@/type/user";
import { RootState } from "../";
import { RequestStatus } from "@/type/ui";

export const getUser = (state: RootState): UserInfo | null => state.auth.user;
export const getUserStatus = (state: RootState): RequestStatus =>
  state.auth.status;
export const getUserError = (state: RootState): string | null =>
  state.auth.error;

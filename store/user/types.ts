import { RequestStatus } from "@/type/ui";
import { UserInfo } from "@/type/user";

export interface UserState {
  user: UserInfo | null;
  status: RequestStatus;
  error: null | string;
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "@/type/user";
import { initialState } from "./const";
import { RequestStatus } from "@/type/ui";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserInfo>) {
      state.user = payload;
    },
    clearUser(state) {
      state.user = null;
    },
    setLoadingStatus(state, { payload }: PayloadAction<RequestStatus>) {
      state.status = payload;
    },
  },
});

export const { actions, reducer, name } = authSlice;

import { InUser } from "@/types/constans";
import * as types from "@/constants/store/login";

export const loginReq = (data: InUser) => ({
  type: types.LOGIN_REQUEST,
  payload: { data },
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

export const loginFailed = (data) => ({
  type: types.LOGIN_FAILED,
  payload: data,
});

export const messageFail = (text) => ({
  type: types.MESSAGE_FAILED,
  payload: text,
});

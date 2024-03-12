import { InUser } from "@/types/constans";
import * as types from "@/constants/store/login";

export const loginReq = (data: InUser) => ({
  type: types.LOGIN_REQUEST,
  payload: { data },
});

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS,
});

export const loginFailed = () => ({
  type: types.LOGIN_FAILED,
});

export const messageFail = (text) => ({
  type: types.MESSAGE_FAILED,
  payload: { text },
});

export const resetLogin = () => ({
  type: types.RESET_LOGIN,
});

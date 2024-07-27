import * as types from "@/constants/store/socialUser";
import { InUser } from "@/types/constants/constans";
import { IUser } from "@/types/object";

export const getUserInfoRequest = (data: InUser) => ({
  type: types.GET_USER_INFO_REQUEST,
  payload: { data },
});

export const getUserInfoSuccess = (data: IUser) => ({
  type: types.GET_USER_INFO_SUCCESS,
  payload: { data },
});

import * as loginApi from "@/apis/login";
import * as types from "@/constants/store/login";
import * as actions from "@/store/action/login";
import { call, put, takeEvery } from "redux-saga/effects";

export const loginSagas = function* (action) {
  const { data } = action.payload;
  try {
    const response = yield call(loginApi.login, data);
    if (response.status === 200) {
      const user = response.data.data;

      yield put(actions.loginSuccess());
      localStorage.setItem("token", user.accessToken);
      window.location.href = "/";
    }
  } catch (error: any) {
    yield put(actions.messageFail(error.response.data));
    yield put(
      actions.loginFailed({
        isError: true,
      })
    );
  }
};

export function* watchLoginAsync() {
  yield takeEvery(types.LOGIN_REQUEST, loginSagas);
}

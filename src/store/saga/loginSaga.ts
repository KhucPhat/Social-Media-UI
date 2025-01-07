import * as loginApi from "@/apis/login";
import * as types from "@/constants/store/login";
import * as actions from "@/store/action/login";
import { call, put, takeEvery } from "redux-saga/effects";

export const loginSagas = function* (action) {
  const { data } = action.payload;
  const response = yield call(loginApi.login, data);

  if (response.status === 200) {
    const user = response.data.data;
    yield put(actions.loginSuccess());
    localStorage.setItem("token", user.accessToken);
    window.location.href = "/";
  } else {
    yield put(actions.loginFailed());
    yield put(
      actions.messageFail(
        response.status === 422
          ? "The account has not been verified. Please check your account verification email."
          : "Login failed.Please try again."
      )
    );
  }
};

export function* watchLoginAsync() {
  yield takeEvery(types.LOGIN_REQUEST, loginSagas);
}

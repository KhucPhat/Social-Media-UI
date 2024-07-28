import { BASE_ROOT, USER_TOKEN } from "@/utils/config";
import axios, { AxiosRequestConfig } from "axios";
import store from "@/store/store";
import { errorsResponseData } from "@/store/action/errorsAction";

export interface Response<T> {
  data: T | null | undefined;
  status: number;
  isError: boolean;
  errorMessage: string;
}

export interface TypeErrosRes {
  response: {
    data: {
      status: number;
      message: string;
    };
    status: number;
    isError: boolean;
    errorMessage: string;
  };
}

export async function apiGet<R>(
  endPoint: string,
  params: R | null | undefined,
  data: R | null | undefined
): Promise<Response<R>> {
  const configs: AxiosRequestConfig = {
    url: `${BASE_ROOT}/api/v1/${endPoint}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${USER_TOKEN}`,
    },
    params,
    data,
  };
  try {
    const response = await axios(configs);

    if (response.status == 200) {
      return {
        data: response.data,
        status: response.status,
        isError: false,
        errorMessage: "",
      };
    }

    return {
      data: null,
      status: response.status,
      isError: true,
      errorMessage: "Lỗi khi thực hiện yêu cầu.",
    };
  } catch (error: any) {
    const dataErrors = {
      data: null,
      status: -1,
      isError: true,
      errorMessage: error.response.data.message,
    };

    store.dispatch(errorsResponseData(dataErrors));
    return dataErrors;
  }
}

export async function apiPost<R>(
  endPoint: string,
  params: R | null | undefined,
  data: R | null | undefined
): Promise<Response<R>> {
  const configs: AxiosRequestConfig = {
    url: `${BASE_ROOT}/api/v1/${endPoint}`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${USER_TOKEN}`,
    },
    params,
    data,
  };
  try {
    const response = await axios(configs);

    if (response.status == 200) {
      return {
        data: response.data,
        status: response.status,
        isError: false,
        errorMessage: "",
      };
    }

    return {
      data: null,
      status: response.status,
      isError: true,
      errorMessage: "Lỗi khi thực hiện yêu cầu.",
    };
  } catch (error: any) {
    const dataErrors = {
      data: null,
      status: -1,
      isError: true,
      errorMessage: error.response.data.message,
    };

    store.dispatch(errorsResponseData(dataErrors));
    return dataErrors;
  }
}

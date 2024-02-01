import { BASE_ROOT, USER_TOKEN } from "@/utils/config";
import axios, { AxiosRequestConfig } from "axios";

export const getUserInfo = async (token) => {
  const configs: AxiosRequestConfig = {
    url: `${BASE_ROOT}/api/v1/user/me`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${
        USER_TOKEN === "" && token ? token : USER_TOKEN
      }`,
    },
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
  } catch (error) {
    return {
      data: null,
      status: -1,
      isError: true,
      errorMessage: "Lỗi khi thực hiện yêu cầu.",
    };
  }
};

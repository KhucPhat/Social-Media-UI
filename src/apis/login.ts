import { InUser, RegisterUser } from "@/types/constants/constans";
import { apiPost } from "./apis";

export const login = async (data: InUser) => {
  return apiPost("user/login", null, data);
};

export const register = async (data: RegisterUser) => {
  return apiPost("user/register", null, data);
};

import { InUser } from "@/types/constans";
import { apiPost } from "./apis";

export const login = async (data: InUser) => {
  return apiPost("user/login", null, data);
};

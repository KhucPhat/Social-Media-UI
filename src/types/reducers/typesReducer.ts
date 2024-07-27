import { IUser } from "./object";

export type TypeUser = {
  info: IUser | null;
};

export type TypeLogin = {
  loading: boolean;
  isError: boolean;
  messageFail: string | null;
};

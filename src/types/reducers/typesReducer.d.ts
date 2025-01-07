import { TypeDataErros } from "./errorResponseData";
import { IUser } from "./object";

export type TypeUser = {
  infor: IUser | null;
};

export type TypeLogin = {
  loading: boolean;
  isError: boolean;
  messageFail: string | null;
};

export type TypeErros = {
  errorsResponseData: TypeDataErros;
};

export type TypeActionReducer = {
  type: string;
  payload: any;
};

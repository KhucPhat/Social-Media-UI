export type InUser = {
  email: string;
  password: string;
};

export type RegisterUser = {
  fullname: string;
  username: string;
  email: string;
  password: string;
};

export type ResApi = {
  data: any | null | undefined;
  status: number;
  isError: boolean;
  errorMessage: string;
};

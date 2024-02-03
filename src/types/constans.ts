export type InUser = {
  email: string;
  password: string;
};

export type ResApi = {
  data: any | null | undefined;
  status: number;
  isError: boolean;
  errorMessage: string;
};

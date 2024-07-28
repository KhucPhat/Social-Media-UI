export type TypeResponse = {
  data: T | null | undefined;
  status: number;
  isError: boolean;
  errorMessage: string;
};

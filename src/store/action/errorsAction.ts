import * as type from "@/constants/store/errors";

export const errorsResponseData = (errors) => ({
  type: type.ERROR_RESPONSE_DATA,
  payload: {
    errors,
  },
});

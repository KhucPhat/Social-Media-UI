import * as types from "@/constants/store/errors";
import { TypeActionReducer } from "@/types/reducers/typesReducer";

const initialState = {
  errorsResponseData: {
    data: null,
    status: 0,
    isError: false,
    errorMessage: "",
  },
};

export const errorsReducer = (
  state = initialState,
  action: TypeActionReducer
) => {
  switch (action.type) {
    case types.ERROR_RESPONSE_DATA: {
      const { errors } = action.payload;
      return {
        ...state,
        errorsResponseData: errors,
      };
    }
    default: {
      return state;
    }
  }
};

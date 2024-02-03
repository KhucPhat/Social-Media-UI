import * as types from "@/constants/store/login";
import _ from "lodash";

interface initialValue {
  loading: boolean;
  isError: boolean;
  messageFail: string | null;
}

const initialState: initialValue = {
  loading: false,
  isError: false,
  messageFail: null,
};

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState: initialValue = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState: initialValue = _.cloneDeep(state);
      newState.loading = false;
      return newState;
    }

    default:
      return state;
  }
};

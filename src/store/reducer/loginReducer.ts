import * as types from "@/constants/store/login";
import { TypeLogin } from "@/types/reducers/typesReducer";
import _ from "lodash";

const initialState: TypeLogin = {
  loading: false,
  isError: false,
  messageFail: "",
};

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState: TypeLogin = _.cloneDeep(state);
      newState.loading = true;
      return newState;
    }
    case types.LOGIN_SUCCESS: {
      const newState: TypeLogin = _.cloneDeep(state);
      newState.loading = false;
      return newState;
    }
    case types.LOGIN_FAILED: {
      const newState: TypeLogin = _.cloneDeep(state);
      newState.isError = true;
      return newState;
    }
    case types.MESSAGE_FAILED: {
      const { text } = action.payload;
      const newState: TypeLogin = _.cloneDeep(state);
      newState.messageFail = text;
      return newState;
    }
    case types.RESET_LOGIN: {
      let newState: TypeLogin = _.cloneDeep(state);
      newState = {
        ...initialState,
      };
      return newState;
    }
    default:
      return state;
  }
};

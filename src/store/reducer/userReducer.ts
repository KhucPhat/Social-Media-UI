import * as types from "@/constants/store/socialUser";
import { IUser } from "@/types/object";
import _ from "lodash";

interface initialValue {
  info: IUser | null;
}

const initialState: initialValue = {
  info: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_USER_INFO_SUCCESS: {
      const { data } = action.payload;
      const newState = _.cloneDeep(state);
      newState.info = data;
      console.log(newState);
      return newState;
    }

    default:
      return state;
  }
};

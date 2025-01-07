import * as types from "@/constants/store/socialUser";
import { TypeUser } from "@/types/reducers/typesReducer";

const initialState: TypeUser = {
  infor: {
    fullname: "",
    username: "",
    email: "",
  },
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_USER_INFO_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        infor: data,
      };
    }

    default:
      return state;
  }
};

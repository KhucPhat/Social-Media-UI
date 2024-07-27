import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";
import { TypeLogin, TypeUser } from "@/types/reducers/typesReducer";

export type RootState = {
  loginReducer: TypeLogin;
  userReducer: TypeUser;
};

const rootReducer = combineReducers({
  loginReducer,
  userReducer,
});

export default rootReducer;

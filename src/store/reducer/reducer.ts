import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";
import { TypeErros, TypeLogin, TypeUser } from "@/types/reducers/typesReducer";
import { errorsReducer } from "./errorsReducer";

export type RootState = {
  loginReducer: TypeLogin;
  userReducer: TypeUser;
  errorsReducer: TypeErros;
};

const rootReducer = combineReducers({
  loginReducer,
  userReducer,
  errorsReducer,
});

export default rootReducer;

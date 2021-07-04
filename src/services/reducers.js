import { combineReducers } from "redux";

import loginReducer from "../services/login/reducer";
import userInfoReducer from "../services/userInfo/reducer";

export default combineReducers({
  login: loginReducer,
  user: userInfoReducer,
});

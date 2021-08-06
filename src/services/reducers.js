import { combineReducers } from "redux";

import loginReducer from "../services/login/reducer";
import userInfoReducer from "./user/reducer";
import locationInfoReducer from "../services/location/reducer";

export default combineReducers({
  login: loginReducer,
  user: userInfoReducer,
  location: locationInfoReducer
});

import { combineReducers } from "redux";

import loginReducer from "../services/login/reducer";


export default combineReducers({
  login: loginReducer,

});

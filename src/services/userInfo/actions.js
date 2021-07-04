import { USER_INFO } from "./actionTypes";
import axios from "axios";

export const userInfoAPI = () => (dispatch) => {
  axios
    .get("/me")
    .then((response) => {
      console.dir(response.data);
      dispatch({ type: USER_INFO, payload: response.data });
    })
    .catch((err) => {
      console.log(
        "[userInfo.actions.js] loginAPI || Could not fetch user information. Try again later."
      );
    });
};

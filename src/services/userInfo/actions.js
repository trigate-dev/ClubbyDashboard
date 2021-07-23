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

export const createNewUserAPI = (
  firstName,
  lastName,
  email,
  password,
  userType
) => {
  const requestData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    user_type: userType,
  };

  axios
    .post("/create_user", requestData)
    .then((response) => {
      if (response.data.message === "User created") {
        alert("A new user has been created!");
        window.location.reload();
      }
    })
    .catch((err) => {
      if (err.response.status === 422) {
        alert(err.response.data.detail);
      } else {
        alert("Something went wrong. Try again!");
      }
      console.log(
        "[userInfo.actions.js] createNewUserAPI || Could not create new user. Try again later."
      );
    });
};

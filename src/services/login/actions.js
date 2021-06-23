import { LOGIN } from "./actionTypes";
import axios from "axios";

export const loginAPI = (email, password) => (dispatch) => {
  let formData = new FormData();
  formData.append('username', email); 
  formData.append('password', password);

    axios
      .post("/token", formData)
      .then((response) => {
          let token = response.data.token_type + ' ' + response.data.access_token
          // Set Login Data
          const loginData = {
            token: token,
          };

        axios.defaults.headers.common["Authorization"] = loginData.token;
        dispatch({ type: LOGIN, payload: loginData });
        console.log("displatched baby");
      }
    )
    .catch((err) => {
      alert('Oops... something went wrong! Try again')
      console.log(
        "[login.actions.js] loginAPI || Could not fetch login. Try again later."
      );
    });
}


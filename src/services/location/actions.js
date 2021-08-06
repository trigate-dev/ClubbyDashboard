import { SET_LOCATION_INFO} from './actionTypes';
import axios from "axios";

export const changeLocationCapacityAPI = (capacity) => {
  const requestBody = {
    capacity: capacity,
  };

  axios.post("/locationInfo", requestBody).catch((err) => {
    console.log(
      "[location.actions.js] changeLocationCapacityAPI || Could not set location capacity. Try again later."
    );
  });
};


export const setLocationInfoInStoreAPI = () => (dispatch) => {
  axios
    .get("/locationInfo")
    .then((response) => {
      const location_info = {
        address_id: response.data.address_id,
        capacity: response.data.capacity,
        opening_time: response.data.opening_time,
        closing_time: response.data.closing_time,
        location_name: response.data.name,
        organisation_id: response.data.organisation_id,
        location_id: response.data.id
      };

      dispatch({ type: SET_LOCATION_INFO, payload: location_info });
    })
    .catch((err) => {
      console.log(
        "[location.actions.js] getLocationInfoAPI || Could not put data in store. Try again later."
      );
    });
}
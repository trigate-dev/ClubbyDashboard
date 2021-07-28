import axios from "axios";

export const setLocationCapacityAPI = (capacity) => {
  const requestBody = {
    capacity: capacity,
  };

  axios.post("/locationCapacity", requestBody).catch((err) => {
    console.log(
      "[location.actions.js] setLocationCapacityAPI || Could not set location capacity. Try again later."
    );
  });
};

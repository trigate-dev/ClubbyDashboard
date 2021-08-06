import { SET_LOCATION_INFO } from "./actionTypes";

const initialState = {
  location_info: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION_INFO:
      return {
        ...state,
        location_info: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
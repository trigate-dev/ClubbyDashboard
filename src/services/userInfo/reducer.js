import { USER_INFO } from "./actionTypes";

const initialState = {
  user_info: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        user_info: action.payload,
      };
    default:
      // console.log("default reducer");
      return {
        ...state,
      };
  }
}

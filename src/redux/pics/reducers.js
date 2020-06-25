import {
  PICS_REQUEST,
  PICS_REQUEST_SUCCESS,
  PICS_REQUEST_FAILURE,
} from "./types";

const initialState = {
  url: "",
  loading: false,
  error: false,
};

const picsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PICS_REQUEST:
      return {
        url: "",
        loading: true,
        error: false,
      };
    case PICS_REQUEST_SUCCESS:
      return {
        url: action.url,
        loading: false,
        error: false,
      };
    case PICS_REQUEST_FAILURE:
      return {
        url: "",
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default picsReducer;

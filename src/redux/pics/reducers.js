import {
  PICS_REQUEST,
  PICS_REQUEST_SUCCESS,
  PICS_REQUEST_FAILURE,
} from "./types";

const initialState = {
  url: "",
  loading: false,
  error: false,
  pics: [],
};

const picsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PICS_REQUEST:
      return { ...state, loading: true }
    case PICS_REQUEST_SUCCESS:
      return { ...state, url: action.payload.url, loading: false, pics: [...state.pics, action.payload]}
    case PICS_REQUEST_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default picsReducer;

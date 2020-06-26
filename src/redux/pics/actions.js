import {
  PICS_REQUEST,
  PICS_REQUEST_SUCCESS,
  PICS_REQUEST_FAILURE,
  PICS_FETCH,
} from "./types";

export const requestPic = () => {
  return { type: PICS_REQUEST };
};

export const requestPicSuccess = (data) => {
  return { type: PICS_REQUEST_SUCCESS, 
  payload: data };
};

export const requestPicError = () => {
  return { type: PICS_REQUEST_FAILURE };
};

export const fetchPic = () => {
  return { type: PICS_FETCH };
};

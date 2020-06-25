import { call, put, takeEvery } from "redux-saga/effects";
import { requestPic, requestPicSuccess, requestPicError } from "./actions";
import { PICS_FETCH } from "./types";
import { URL } from "../../constants";

export function* watchFetchPic() {
  yield takeEvery(PICS_FETCH, fetchPicAsync);
}

function* fetchPicAsync() {
  try {
    yield put(requestPic());
    const data = yield call(() => {
      return fetch(URL).then((res) => res.json());
    });
    yield put(requestPicSuccess(data.data));
  } catch (error) {
    yield put(requestPicError());
  }
}

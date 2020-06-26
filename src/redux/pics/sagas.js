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
    const url = data.data.image_url;
    const id = data.data.id;
    const name = data.data.username;
    const payload = {id, url, name, time: new Date() }
    yield put(requestPicSuccess(payload));
  } catch (error) {
    yield put(requestPicError());
  }
}

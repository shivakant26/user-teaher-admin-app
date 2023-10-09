import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from "../action/actionType";
import instance from "../../api/apiConfig";

function* getData() {
  try {
    const res = yield call(instance.get, "/todos");
    yield put({
      type: GET_DATA_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    yield put({
      type: GET_DATA_FAILURE,
      payload: error,
    });
  }
}

export default function* userSaga() {
  yield takeEvery(GET_DATA_REQUEST, getData);
}

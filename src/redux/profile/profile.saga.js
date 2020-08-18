import {  put, takeLatest } from "redux-saga/effects";
import { profileActionTypes } from "./profile.types";
import { payloadAction } from "../../assets/functions";

export function* fetchProfileAsync(action) {
  try {
    yield console.log(action);
    const gitRef = yield fetch(
      `https://api.github.com/users/${action.payload}`
    );
    const resp = yield gitRef.json();
    if (resp.message) {
      yield put(payloadAction(profileActionTypes.USER_NOT_FOUND, resp.message));
    } else {
      yield put(payloadAction(profileActionTypes.GET_PROFILE_SUCCESS, resp));
    }
  } catch (error) {
    yield put(
      payloadAction(profileActionTypes.GET_PROFILE_FAILURE, error.message)
    );
  }
}

export function* fetchProfileStart() {
  yield takeLatest(profileActionTypes.GET_PROFILE_START, fetchProfileAsync);
}

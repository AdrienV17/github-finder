import { takeEvery,put, takeLatest } from "redux-saga/effects";
import { profileActionTypes } from "./profile.types";
import { payloadAction, typeAction } from "../../assets/functions";

export function* fetchProfileAsync(action) {
    try {
        yield console.log(action);
    const gitRef = yield fetch(`https://api.github.com/users/${action.payload}`);
    const resp = yield gitRef.json();
    yield put(payloadAction(profileActionTypes.GET_PROFILE_SUCCESS,resp))
  } catch (error) {
      yield put(payloadAction(profileActionTypes.GET_PROFILE_FAILURE,error.message))
  }
}

export function* fetchProfileStart() {
  yield takeLatest(profileActionTypes.GET_PROFILE_START, fetchProfileAsync);
}

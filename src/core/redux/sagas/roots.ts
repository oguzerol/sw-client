import { call, put, takeEvery } from "redux-saga/effects";

import { FETCH_ROOTS } from "../constants";
import { getRoots } from "../../../api";
import { fetchRootsError, fetchRootsSuccess } from "../actions/roots";

import { fetchResources } from "../actions/resources";

export function* watchRootFetch() {
  yield takeEvery(FETCH_ROOTS, fetchRoots);
}

function* fetchRoots(): any {
  try {
    const roots = yield call(getRoots);
    yield put(fetchRootsSuccess(roots));

    const currentTab = window.localStorage.getItem("tab");

    if (currentTab) {
      yield put(fetchResources(roots[JSON.parse(currentTab)]));
    }
  } catch (error) {
    yield put(fetchRootsError(error));
  }
}

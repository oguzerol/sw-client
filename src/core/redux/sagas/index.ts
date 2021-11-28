import { all, fork } from "redux-saga/effects";
import { watchRootFetch } from "./roots";
import { watchResourceFetch } from "./resources";

const rootSaga = function* root() {
  yield all([fork(watchRootFetch), fork(watchResourceFetch)]);
};

export default rootSaga;

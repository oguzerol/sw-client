import { applyMiddleware, createStore } from "redux";
import rootReducer from "./core/redux/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./core/redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

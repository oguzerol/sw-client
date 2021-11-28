import { combineReducers } from "redux";
import rootsReducer from "./roots";
import resourcesReducer from "./resources";

const rootReducer = combineReducers({
  roots: rootsReducer,
  resources: resourcesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

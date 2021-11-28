import {
  FETCH_ROOTS,
  FETCH_ROOTS_FAILURE,
  FETCH_ROOTS_SUCCESS,
} from "../constants";

export type RootsState = {
  isLoading: boolean;
  data?: object;
  error?: null;
};

const initialState: RootsState = {
  isLoading: true,
  data: void 0,
  error: void 0,
};

export type RootsActionType =
  | typeof FETCH_ROOTS
  | typeof FETCH_ROOTS_FAILURE
  | typeof FETCH_ROOTS_SUCCESS;

const rootsReducer = (
  state: RootsState = initialState,
  action: {
    type: RootsActionType;
    payload: any;
  }
) => {
  switch (action.type) {
    case FETCH_ROOTS:
      return { ...state, isLoading: true };

    case FETCH_ROOTS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    case FETCH_ROOTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default rootsReducer;

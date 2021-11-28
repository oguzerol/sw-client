import {
  FETCH_RESOURCES,
  FETCH_RESOURCES_FAILURE,
  FETCH_RESOURCES_SUCCESS,
} from "./../constants";

export type ResourcesState = {
  isLoading: boolean;
  data?: object;
  error?: null;
};

export type ResourceActionType =
  | typeof FETCH_RESOURCES
  | typeof FETCH_RESOURCES_SUCCESS
  | typeof FETCH_RESOURCES_FAILURE;

const initialState: ResourcesState = {
  isLoading: true,
  data: void 0,
  error: void 0,
};

const rootsReducer = (
  state: ResourcesState = initialState,
  action: {
    type: ResourceActionType;
    payload: any;
  }
) => {
  switch (action.type) {
    case FETCH_RESOURCES:
      return { ...state, isLoading: true };

    case FETCH_RESOURCES_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };

    case FETCH_RESOURCES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default rootsReducer;

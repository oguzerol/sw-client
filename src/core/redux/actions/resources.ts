import {
  FETCH_RESOURCES_FAILURE,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES,
} from "./../constants";

import { BaseAction } from "../../common";

export const fetchResources = (url: string): BaseAction => {
  return {
    type: FETCH_RESOURCES,
    payload: url,
  };
};

export const fetchResourcesSuccess = (payload: any): BaseAction => ({
  type: FETCH_RESOURCES_SUCCESS,
  payload,
});

export const fetchResourcesError = (payload: any): BaseAction => ({
  type: FETCH_RESOURCES_FAILURE,
  payload: payload.message,
});

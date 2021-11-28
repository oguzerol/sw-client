import {
  FETCH_ROOTS,
  FETCH_ROOTS_FAILURE,
  FETCH_ROOTS_SUCCESS,
} from "../constants";
import { BaseAction } from "../../common";

export const fetchRoots = (): BaseAction => ({
  type: FETCH_ROOTS,
});

export const fetchRootsSuccess = (payload: any): BaseAction => ({
  type: FETCH_ROOTS_SUCCESS,
  payload,
});

export const fetchRootsError = (payload: any): BaseAction => ({
  type: FETCH_ROOTS_FAILURE,
  payload: payload.message,
});

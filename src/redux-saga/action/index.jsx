import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "./actionType";

export const getAllData = () => {
  return {
    type: GET_DATA_REQUEST, 
  };
}
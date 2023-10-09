import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE } from "../action/actionType";

const initialState = {
  data: [],
  loading: false,
  error: ""
};

const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: ""
      };
    case GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload 
      };
    default:
      return state;
  }
};

export default crudReducer;

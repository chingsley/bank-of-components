import { LOADING, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions';

const initialState = {
  error: null,
  token: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

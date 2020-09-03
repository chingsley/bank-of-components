import axios from 'axios';

export const LOADING = 'LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginUser = ({ username, password }) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const url = 'http://localhost:5000/api/login';
    const body = { username, password };
    const headers = { 'Content-Type': 'application/json' };
    const response = await axios.post(url, body, { headers });
    console.log(response.data);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      const { data } = error.response;
      dispatch({ type: LOGIN_FAILED, payload: data.error });
    } else {
      dispatch({ type: LOGIN_FAILED, payload: error.message });
    }
  }
};

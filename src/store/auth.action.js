import axios from "axios";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.actiontypes";

export const login = (dispatch, logincreds) => {
  dispatch({ type: LOGIN_LOADING });

  axios
    .post("https://reqres.in/api/login", logincreds)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logout = (dispatch) => {
   dispatch({type : LOGOUT})
}

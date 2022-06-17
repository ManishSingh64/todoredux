import axios from "axios";

import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "./action.types";

export const getTodos = (dispatch) => {
  //this time is wating time
  dispatch({ type: GET_TODO_LOADING });
  //dispatch
  return axios
    .get("http://localhost:8080/todos")
    .then((r) => {
      // setTimeout(() => {
      dispatch({ type: GET_TODO_SUCCESS, payload: r.data });
      // }, 5000);
      //loading ends
      //successfully data fetched.
    })
    .catch(() => {
      //loading ends
      //error
      dispatch({ type: GET_TODO_ERROR });
    });
};

export const AddTask = (dispatch, payload) => {
  dispatch({ type: ADD_TODO_LOADING });

  axios
    .post("http://localhost:8080/todos", payload)
    .then((r) => {
      // console.log(r.data);

      dispatch({ type: ADD_TODO_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: ADD_TODO_ERROR });
    });
};

export const completedTodo = (dispatch, id) => {
  dispatch({ type: COMPLETE_TODO, payload: id });
};

export const deleteTodo = (dispatch, id) => {
  axios.delete(`http://localhost:8080/todos/${id}`).then((r) => {
    dispatch({ type: DELETE_TODO, payload: id });
  });
};

export const updateTodo = (dispatch, todo, value) => {
  let updatedTodo = { ...todo, value: value };
  axios
    .patch(`http://localhost:8080/todos/${todo.id}`, updatedTodo)
    .then((r) => {
      dispatch({ type: UPDATE_TODO, payload: updatedTodo });
    });
};

// arrow k baad parethesis lagana h jb dispatch ka use krrenge

// export const AddTask = (payload) => ({ type: ADD_TODO, payload});

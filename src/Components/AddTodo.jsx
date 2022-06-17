import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {Link} from 'react-router-dom'
import {
  AddTask,
  completedTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../store/action";
// import axios from "axios";
// import { combineReducers } from "redux";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const {
    getTodos: gTodo,
    addTodo: aTodo,
    data: todos,
  } = useSelector((state) => state.todo);

  // const { loading: addButtonLoading } = useSelector((state) => state.addTodo);
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = (value) => {
    //   console.log(todos);
    AddTask(dispatch, {
      value: value,
      id: uuidv4(),
      isCompleted: false,
    });
  };

  useEffect(() => {
    getTodos(dispatch);
  }, [dispatch]);

  if (gTodo.loading) return <div>LOADING...</div>;
  else if (gTodo.error) return <h1>Something Went Wrong....</h1>;

  return (
    <div>
      <h1>AddTodo</h1>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="Tasks"
        name=""
        id=""
      />
      <button disabled={aTodo.loading} onClick={() => handleOnClick(value)}>
        Add Tasks
      </button>

      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            border: "1px solid",
            height: "80px",
            width: "400px",
            margin: "auto",
            marginTop: "30px",
          }}
        >
          {todo.value}
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "30px",
            }}
          >
            <button onClick={() => completedTodo(dispatch, todo.id)}>
              {todo.isCompleted ? "Uncomplete" : "Complete"}
            </button>
            <button onClick={() => deleteTodo(dispatch, todo.id)}>
              Delete
            </button>
            <button onClick={() => updateTodo(dispatch, todo, value)}>
              Update
            </button>

            <Link to={`/todos/${todo.id}`}>See Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { login } from "../store/auth.action";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch();
    const {isAuth} = useSelector((state) => state.auth);
    const navigate = useNavigate();

  const [logincreds, setLogincreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogincreds({ ...logincreds, [name]: value });
  };

  if(isAuth){
    navigate("/")
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(dispatch,logincreds)

  }
  return (
    <div>
      Login
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter Email"
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleOnChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

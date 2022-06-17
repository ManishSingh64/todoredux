import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../store/auth.action";

export const Navbar = () => {
    const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log(isAuth,"line 12")
    if(isAuth){
        logout(dispatch)
    }else{
        navigate('/login')
    }
  };
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link to="/">Logo</Link>
      <button onClick={handleOnClick}>
        {isAuth ? "logout" : "login"}
      </button>
    </div>
  );
};

// export default Navbar;

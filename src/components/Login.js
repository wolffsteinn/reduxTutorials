import React from "react";

//useDispatch hook is for you to modify state
import { useDispatch } from "react-redux";
import { login } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Log in here</h1>
      <button
        onClick={() => {
          dispatch(login({ name: "anna", age: 28, email: "nana@test.com" }));
        }}
      >
        Log in here
      </button>
    </>
  );
};

export default Login;

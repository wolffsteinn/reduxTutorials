import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/user";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Leaving?</h1>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;

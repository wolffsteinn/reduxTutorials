import React, { useState } from "react";
//because you want to change the state, you call the useDispatch hook
import { useDispatch } from "react-redux";
//import the function that will execute the action
import { changeColour } from "../features/theme";

const ColourChange = () => {
  const [colour, setColour] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input type="text" onChange={(e) => setColour(e.target.value)} />
      <button
        onClick={() => {
          dispatch(changeColour(colour));
        }}
      >
        Change Colour!
      </button>
    </>
  );
};

export default ColourChange;

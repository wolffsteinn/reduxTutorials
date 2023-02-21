import React from "react";

//useSelector hook is for you to access the state
import { useSelector } from "react-redux";

const Profile = () => {
  // to access the user state,
  const user = useSelector((state) => state.user.value);
  const themeColour = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: themeColour }}>
      <h1> Profile Page </h1>

      <h2> Username: {user.name}</h2>
      <h3> Your Age: {user.age}</h3>
      <h3> Your email: {user.email}</h3>
    </div>
  );
};

export default Profile;

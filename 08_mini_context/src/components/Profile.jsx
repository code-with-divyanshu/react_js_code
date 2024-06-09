import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return <div style={{ fontSize: "2rem", color: "Red" }}>Please Login</div>;

  return (
    <div style={{ fontSize: "2rem", color: "green" }}>
      Welcome {user.username}
    </div>
  );
}

export default Profile;

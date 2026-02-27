import React from "react";
import Component4 from "../components/Component4";
import UserProfile from "../components/UserProfile";

export default function Profile() {
  return (
    <div>
      <Component4 theme="black" title={"Profile"} />
      <UserProfile />
    </div>
  );
}

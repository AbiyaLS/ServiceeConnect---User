import React from "react";
import Component1 from "../components/first";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";

function Page1() {
  return (
    <div className="w-full min-h-screen bg-gray-200 ">
      <Component1 />
      <Component2 mode="signup" />
      <Component3 type="signup" />
    </div>
  );
}

export default Page1;

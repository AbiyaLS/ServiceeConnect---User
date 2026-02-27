import React from "react";
import BrandingCard from "../components/BrandingCard";
import BottomNavBar from "../components/BottomNavBar";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component4";

export default function PageU32() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-200">
      <Component4
        title={"Transaction"}
        showBack={true}
        showFilter={true}
        showSearch={true}
        theme="black"
        pop={() => setShowFilterPopup(true)}
      />
      <div className="p-6">
        <BrandingCard />
        <BottomNavBar />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component";
import Ereciept from "../components/Ereciept";
import HeaderDropDown from "../components/HeaderDropDown";


export default function PageU24() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 font-sans relative">
      <div>
        <Component4
          title="Ereciept"
          theme="black"
          showMenu={true}
          onMenuClick={() => setShowDropdown(prev => !prev)}
         
        />
        {showDropdown && <HeaderDropDown onClose={() => setShowDropdown(false)} />}
      </div>  
      <div id="pdf-content"  className="w-[800px] mx-auto bg-white text-black my-4">
        <Ereciept />
      </div>  
    </div>
  );
}

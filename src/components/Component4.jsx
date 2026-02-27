import React, { useState } from "react";
import {
  ArrowLeft,
  CircleChevronLeft,
  Search,
  Phone,
  SlidersHorizontal,
  MoreVertical,
  Bell,
  X,
  Download,
  Printer,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import user from "../assets/user.jpg";
import FilterPopUp from "./FilterPopUp";

function Component4({
  pop,
  pop1,
  title,
  showMenubar = false,
  showBack = true,
  showSearch = false,
  showPhone = false,
  showFilter = false,
  showclear = false,
  shownotification = false,
  showprofil = false,
  theme = "white",
  onDownload,
  onPrint,
}) {
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  const isDark = theme === "black";
  const bgColor = isDark ? "bg-[#1C1B1F]" : "bg-white";
  const textColor = isDark ? "text-white" : "text-[#1C1B1F]";
  const hoverColor = isDark ? "hover:bg-gray-800" : "hover:bg-gray-100";
  const inputBg = isDark ? "bg-[#2b2b2b] text-white" : "bg-gray-100 text-black";

  const BackIcon = isDark ? CircleChevronLeft : ArrowLeft;

  return (
    <>
      <header className={`px-4 py-4 ${bgColor} ${textColor}`}>
        <div className="flex items-center justify-between">

          {/* LEFT SECTION */}
          <div className="flex items-center gap-2">

            {/* MENU ICON (Mobile Only) */}
            {showMenubar && (
              <button
                onClick={pop}
                className={`p-1 rounded-full ${hoverColor} md:hidden`}
              >
                <MoreVertical size={24} />
              </button>
            )}

            {/* BACK BUTTON */}
            {showBack && (
              <button
                onClick={() => navigate(-1)}
                className={`p-1 rounded-full ${hoverColor}`}
              >
                <BackIcon size={24} />
              </button>
            )}

            <h1 className="text-lg font-semibold uppercase">{title}</h1>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3">

            {showFilter && (
              <button
                onClick={() => setShowFilterPopup(true)}
                className={`p-1 rounded-full ${hoverColor}`}
              >
                <SlidersHorizontal size={22} />
              </button>
            )}

            {showSearch && (
              <button
                onClick={() => setShowSearchBar(!showSearchBar)}
                className={`p-1 rounded-full ${hoverColor}`}
              >
                {showSearchBar ? <X size={22} /> : <Search size={22} />}
              </button>
            )}

            {onDownload && (
              <button
                onClick={onDownload}
                className={`p-1 rounded-full ${hoverColor}`}
              >
                <Download size={22} />
              </button>
            )}

            {onPrint && (
              <button
                onClick={onPrint}
                className={`p-1 rounded-full ${hoverColor}`}
              >
                <Printer size={22} />
              </button>
            )}

            {shownotification && (
              <Link to="/PageU40">
                <button className={`p-1 rounded-full ${hoverColor}`}>
                  <Bell size={22} />
                </button>
              </Link>
            )}

            {showPhone && (
              <Link to="/Page">
                <button className={`p-1 rounded-full ${hoverColor}`}>
                  <Phone size={22} />
                </button>
              </Link>
            )}

            {showclear && (
              <button className={`p-1 rounded-full ${hoverColor}`}>
                Clear
              </button>
            )}

            {showprofil && (
              <button onClick={pop1} className="p-0 bg-white rounded-full">
                <img
                  className="md:w-10 md:h-10 h-7 w-7 rounded-full object-cover"
                  src={user}
                  alt="profile"
                />
              </button>
            )}
          </div>
        </div>

        {/* SEARCH INPUT */}
        {showSearchBar && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search..."
              className={`border w-full px-4 py-3 rounded-xl outline-none ${inputBg}`}
            />
          </div>
        )}
      </header>

      {/* FILTER POPUP */}
      {showFilterPopup && (
        <FilterPopUp onClose={() => setShowFilterPopup(false)} />
      )}
    </>
  );
}

export default Component4;
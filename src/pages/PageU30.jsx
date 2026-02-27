import React from "react";

import ComplaintItem from "../components/ComplaintItem";
import BottomNavBar from "../components/BottomNavBar";
import { useNavigate } from "react-router-dom";
import Component4 from "../components/Component4";

export default function PageU30() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-200 font-sans">
            <Component4 title={"Complaints"} theme="black" showFilter showSearch/>
            <ComplaintItem />
            <BottomNavBar />
        </div>
    )
}
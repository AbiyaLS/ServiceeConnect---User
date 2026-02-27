import React from "react";
import { useNavigate } from "react-router-dom";

import ServiceRequest from "../components/ServiceRequest1";
import Component4 from "../components/Component4";

export default function PageU28() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            
            <Component4
            title={"Service Details"}
            theme="black"/>
            <div className="py-5">
                <ServiceRequest />
            </div>
            
        </div>
    )
}
import React from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import Component4 from "../components/Component4";
import Ereciept from "../components/Ereciept";

const U23EReceipt = () => {
  const navigate = useNavigate();

  const handleBackToPayment = () => {
    navigate("/U21_PAYMENT_METHODS");
  };

  const handleDownload = async () => {
    const element = document.getElementById("receipt-content");
    if (!element) return;

    const canvas = await html2canvas(element, {
      backgroundColor: "#ffffff",
      scale: 3,
    });
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "E-Receipt.png";
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Component4
        title="E-RECEIPT"
        theme="black"
        showBack={true}
        backPath="/Page11"
        onDownload={handleDownload}  // ✅ show download icon
        onPrint={handlePrint}        // ✅ show print icon
      />

      <div className="p-4">
        <Ereciept />
      </div>
    </div>
  );
};

export default U23EReceipt;
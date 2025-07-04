import React from "react";
import { useNavigate } from "react-router-dom";
import submittedImg from "../assets/images/Submitted img.png"; // Adjust the path as needed

export default function ThankYou() {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    navigate("/result");
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center"
      style={{
        fontFamily: "'Urbanist', sans-serif",
        backgroundColor: "#ffffff",
        color: "#000",
        padding: "20px",
      }}
    >
      <img
        src={submittedImg}
        alt="Submitted Successfully"
        style={{
          width: "160px",
          maxWidth: "80%",
          marginBottom: "30px",
        }}
      />

      <h4 style={{ fontWeight: "700", marginBottom: "10px" }}>
        Thank You your response<br />has been submitted
      </h4>

      <button
        className="btn mt-3"
        style={{
          backgroundColor: "#D8F275",
          color: "#000",
          fontWeight: "700",
          padding: "10px 32px",
          borderRadius: "6px",
        }}
        onClick={handleDoneClick}
      >
        Done
      </button>
    </div>
  );
}

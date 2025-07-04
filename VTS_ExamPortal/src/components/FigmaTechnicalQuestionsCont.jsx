import React from "react";
import { useNavigate } from "react-router-dom";

export default function FigmaTechnicalQuestionsContinuation() {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate("/figma-technical-questions");
  };

  const handleSubmitClick = () => {
    navigate("/thank-you");
  };

  const questions = [
    "Where can label text be aligned?",
    "Where can label text be aligned?",
    "Where can label text be aligned?",
    "Where can label text be aligned?",
    "Where can label text be aligned?",
  ];

  const options = ["Top", "Right", "Center", "Left"];

  return (
    <div className="container py-4" style={{ fontFamily: "Urbanist, sans-serif" }}>
      <h3 className="fw-bold text-center mb-4">Figma Technical Questions (Contd...)</h3>

      <div className="bg-light p-4 rounded" style={{ backgroundColor: "#f1fbb3" }}>
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2">
              <strong>{index + 6}. </strong> {q}
            </div>

            <div className="row">
              {options.map((option, optIndex) => (
                <div key={optIndex} className="col-6 col-md-3 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={`question-${index + 6}`}
                      id={`q${index + 6}-opt${optIndex}`}
                    />
                    <label className="form-check-label" htmlFor={`q${index + 6}-opt${optIndex}`}>
                      {option}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-dark px-4"
            onClick={handlePreviousClick}
          >
            Previous
          </button>
          <button
            className="btn px-4"
            style={{ backgroundColor: "#d6f26b" }}
            onClick={handleSubmitClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

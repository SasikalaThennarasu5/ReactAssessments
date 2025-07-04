import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UploadQuestions() {
  const [technicalFiles, setTechnicalFiles] = useState([]);
  const [practicalFiles, setPracticalFiles] = useState([]);

  const handleDrop = (e, setter) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setter(files);
  };

  const handleBrowse = (e, setter) => {
    const files = Array.from(e.target.files);
    setter(files);
  };

  const boxStyle = {
    border: "1px dashed #a5e65a",
    backgroundColor: "#fff",
    padding: "30px",
    textAlign: "center",
    borderRadius: "8px",
  };

  const iconStyle = {
    fontSize: "28px",
    color: "#a5e65a",
    marginBottom: "10px",
  };

  const renderFiles = (files) =>
    files.map((file, index) => (
      <div key={index} className="text-muted small mt-2">
        📄 {file.name}
      </div>
    ));

  return (
    <div className="p-4" style={{ fontFamily: "Urbanist, sans-serif" }}>
      <div className="container">

        {/* Technical Question Upload */}
        <div className="mb-4 p-3 border border-success-subtle rounded">
          <h6 className="fw-bold mb-3">Upload Technical Question Paper</h6>
          <div
            style={boxStyle}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, setTechnicalFiles)}
          >
            <div style={iconStyle}>⬆️</div>
            <p className="mb-2">Drag and drop your files here</p>
            <p className="mb-2">or</p>
            <input
              type="file"
              className="d-none"
              id="technical-upload"
              onChange={(e) => handleBrowse(e, setTechnicalFiles)}
              multiple
              accept=".pdf,.doc,.docx"
            />
            <label htmlFor="technical-upload" className="btn btn-dark">
              Browse Files
            </label>
            <p className="text-muted mt-2" style={{ fontSize: "0.875rem" }}>
              Supported formats: PDF, DOC, DOCX (Max: 10MB)
            </p>
            {renderFiles(technicalFiles)}
          </div>
        </div>

        {/* Practical Question Upload */}
        <div className="mb-4 p-3 border border-success-subtle rounded">
          <h6 className="fw-bold mb-3">Upload Practical Question Paper</h6>
          <div
            style={boxStyle}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, setPracticalFiles)}
          >
            <div style={iconStyle}>⬆️</div>
            <p className="mb-2">Drag and drop your files here</p>
            <p className="mb-2">or</p>
            <input
              type="file"
              className="d-none"
              id="practical-upload"
              onChange={(e) => handleBrowse(e, setPracticalFiles)}
              multiple
              accept=".pdf,.doc,.docx"
            />
            <label htmlFor="practical-upload" className="btn btn-dark">
              Browse Files
            </label>
            <p className="text-muted mt-2" style={{ fontSize: "0.875rem" }}>
              Supported formats: PDF, DOC, DOCX (Max: 10MB)
            </p>
            {renderFiles(practicalFiles)}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/img1.png"; // ✅ Make sure the logo exists here

const Result = () => {
  const pdfRef = useRef();
  const [editMode, setEditMode] = useState(false);
  const [trainees, setTrainees] = useState([
    { name: "Kavya", trainer: "Priya", tech: 20, practical: 40 },
    { name: "Diya", trainer: "Priya", tech: 10, practical: 50 },
    { name: "Geetha", trainer: "Priya", tech: 15, practical: 45 },
    { name: "Keerthi", trainer: "Priya", tech: 10, practical: 60 },
    { name: "Sujitha", trainer: "Priya", tech: 20, practical: 30 },
    { name: "Ramu", trainer: "Priya", tech: 25, practical: 60 },
    { name: "Ram", trainer: "Priya", tech: 15, practical: 30 },
  ]);

  const styles = {
    fontFamily: "'Urbanist', sans-serif",
    backgroundColor: "#ffffff",
    color: "#000",
  };

  const getFormattedDate = () => {
    const today = new Date();
    return today.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleDownload = async () => {
    const element = pdfRef.current;
    const opt = {
      margin: 0.5,
      filename: "Result_Summary.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    const html2pdf = (await import("html2pdf.js")).default;
    html2pdf().set(opt).from(element).save();
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...trainees];
    updated[index][field] = parseInt(value) || 0;
    setTrainees(updated);
  };

  return (
    <div className="container-fluid min-vh-100 p-3" style={styles}>
      {/* ✅ PDF content starts here */}
      <div ref={pdfRef}>
        {/* ✅ Logo, Title, and Date */}
        <div className="text-center mb-4">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <h3 style={{ fontWeight: "bold" }}>Result Summary</h3>
          <p>Date: {getFormattedDate()}</p>
        </div>

        {/* Stats */}
        <div className="row text-center mb-4 g-3">
          {[
            { label: "Total Trainees", value: 15 },
            { label: "Total Marks", value: 100 },
            { label: "No of Student Present", value: 10 },
            { label: "No of Student Absent", value: 5 },
          ].map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-3" key={idx}>
              <div
                className="p-3 rounded"
                style={{ backgroundColor: "#ecf8b3", color: "#000000" }}
              >
                <h6>{item.label}</h6>
                <h5>{item.value}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center">
            <thead>
              <tr>
                {[
                  "S.no",
                  "Trainee's Name",
                  "Trainer Name",
                  "Technical Marks (Out of 30)",
                  "Practical Marks (Out of 70)",
                  "Total Marks",
                ].map((heading, idx) => (
                  <th
                    key={idx}
                    style={{ backgroundColor: "#201F31", color: "white" }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {trainees.map((t, i) => (
                <tr key={i}>
                  <td style={{ backgroundColor: "#D8F275" }}>{i + 1}</td>
                  <td style={{ backgroundColor: "#D8F275" }}>{t.name}</td>
                  <td style={{ backgroundColor: "#D8F275" }}>{t.trainer}</td>
                  <td style={{ backgroundColor: "#D8F275" }}>
                    {editMode ? (
                      <input
                        type="number"
                        value={t.tech}
                        onChange={(e) =>
                          handleInputChange(i, "tech", e.target.value)
                        }
                        className="form-control form-control-sm"
                      />
                    ) : (
                      t.tech
                    )}
                  </td>
                  <td style={{ backgroundColor: "#D8F275" }}>
                    {editMode ? (
                      <input
                        type="number"
                        value={t.practical}
                        onChange={(e) =>
                          handleInputChange(i, "practical", e.target.value)
                        }
                        className="form-control form-control-sm"
                      />
                    ) : (
                      t.practical
                    )}
                  </td>
                  <td style={{ backgroundColor: "#D8F275" }}>
                    {t.tech + t.practical}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Buttons (excluded from PDF) */}
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
        <button className="btn btn-dark" onClick={handleDownload}>
          Download PDF
        </button>
        <button
          className="btn"
          style={{ backgroundColor: "#ecf8b3", color: "#000000" }}
          onClick={handleEditToggle}
        >
          {editMode ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Result;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PriyaImg from "../assets/images/img1.png";
import RithikaImg from "../assets/images/img2.png";
import ReshmaImg from "../assets/images/img3.png";

export default function Designing({ username }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMode, setSelectedMode] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString();

  const getGreeting = () => {
    const hour = dateTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const handleFilterSubmit = () => {
    setShowModal(false);
    if (selectedMode === "online") navigate("/online-trainees");
    else if (selectedMode === "offline") navigate("/offline-trainees");
  };

  const trainers = [
    { name: "Priya", role: "UI/UX Designer", image: PriyaImg },
    { name: "Rithika", role: "Frontend Developer", image: RithikaImg },
    { name: "Reshma", role: "Backend Developer", image: ReshmaImg },
  ];

  return (
    <div className="p-4" style={{ fontFamily: "Urbanist, sans-serif" }}>
      {/* Greeting */}
      <div className="mb-3">
        <h5 className="fw-bold">{getGreeting()}, {username}!</h5>
        <p className="text-muted mb-0">{formattedDate} - {formattedTime}</p>
      </div>

      {/* Top Section - Search and Filter */}
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            style={{ maxWidth: "300px" }}
          />
          <button
            className="btn btn-dark ms-2"
            onClick={() => setShowModal(true)}
          >
            Filter
          </button>
        </div>
        <button className="btn btn-dark">+ Add Trainees</button>
      </div>

      {/* Active Trainers */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="p-3 rounded shadow" style={{ backgroundColor: "#e6f985" }}>
            <h6 className="fw-bold mb-3">Active Trainers</h6>
            {trainers.map((trainer, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center mb-2 p-2 bg-white rounded shadow-sm"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="rounded-circle me-2"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                  />
                  <div>
                    <strong>{trainer.name}</strong>
                    <div className="small text-muted">{trainer.role}</div>
                  </div>
                </div>
                <button className="btn btn-sm btn-light">15 Trainees</button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="col-md-6 mb-3">
          <div className="p-3 rounded shadow" style={{ backgroundColor: "#e6f985" }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold">Upcoming Exams</h6>
              <button className="btn btn-dark btn-sm">Upload New Exam</button>
            </div>
            {[
              { title: "Figma Technical Questions", date: "May 15, 2025", time: "2:30 PM", duration: "30 Minutes" },
              { title: "Figma Practical Questions", date: "May 16, 2025", time: "4:00 PM", duration: "1 Day" },
            ].map((exam, index) => (
              <div key={index} className="p-2 bg-white rounded shadow-sm mb-2">
                <strong>{exam.title}</strong>
                <div className="small text-muted">Duration: {exam.duration}</div>
                <div className="small fw-bold">{exam.date} - {exam.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upload Question Paper */}
      <div
        className="border border-dashed text-center p-4"
        style={{ borderColor: "#ccc", borderStyle: "dashed", backgroundColor: "#f8f9fa" }}
      >
        <div>📤</div>
        <p>Drag and drop your files here or</p>
        <button className="btn btn-dark">Browse Files</button>
        <small className="text-muted d-block mt-2">Supported formats: PDF, DOC, DOCX (Max: 10MB)</small>
      </div>

      {/* Filter Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Filter By</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-2">
                  <label>Trainee Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-2">
                  <label>Course Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-2">
                  <label>Duration</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-2">
                  <label>Class Mode</label>
                  <div>
                    <input
                      type="radio"
                      name="classMode"
                      value="online"
                      onChange={(e) => setSelectedMode(e.target.value)}
                    /> Online
                    <br />
                    <input
                      type="radio"
                      name="classMode"
                      value="offline"
                      onChange={(e) => setSelectedMode(e.target.value)}
                    /> Offline
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleFilterSubmit}
                  disabled={!selectedMode}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

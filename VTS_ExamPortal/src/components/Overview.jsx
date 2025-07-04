import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Overview.css";

import UserProfile from "../assets/images/img5.png";
import PriyaImg from "../assets/images/img1.png";
import RithikaImg from "../assets/images/img2.png";
import ReshmaImg from "../assets/images/img3.png";

export default function Overview({ username }) {
  const navigate = useNavigate();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTrainee, setNewTrainee] = useState({ name: "", role: "" });

  const [trainers, setTrainers] = useState([
    { name: "Priya", role: "UI/UX Designer", image: PriyaImg },
    { name: "Rithika", role: "Frontend Developer", image: RithikaImg },
    { name: "Reshma", role: "Backend Developer", image: ReshmaImg },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const handleAddTrainee = () => {
    if (newTrainee.name && newTrainee.role) {
      setTrainers((prev) => [...prev, { ...newTrainee, image: UserProfile }]);
      setNewTrainee({ name: "", role: "" });
      setShowAddModal(false);
    }
  };

  return (
    <div className="overview-page p-4" style={{ fontFamily: "Urbanist, sans-serif" }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h5 className="fw-bold">Good Morning, {username}!</h5>
          <p className="text-muted mb-0">
            {formattedDate} | {formattedTime}
          </p>
        </div>

        <div className="d-flex align-items-center">
          <div className="input-group me-3">
            <input type="text" className="form-control" placeholder="Search" />
            <button className="btn" style={{ backgroundColor: "#d6f26b" }}>🔍</button>
          </div>
          <div className="position-relative me-3">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            🔔
          </div>
          <img
            src={UserProfile}
            alt="User"
            className="rounded-circle"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow" style={{ backgroundColor: "#ffeaa7" }}>
            <h3 className="fw-bold">500</h3>
            <p>Total Trainees 👥</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow" style={{ backgroundColor: "#c8f7c5" }}>
            <h3 className="fw-bold">15</h3>
            <p>Active Courses 📅</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="p-3 rounded shadow" style={{ backgroundColor: "#f5a3d1" }}>
            <h3 className="fw-bold">12</h3>
            <p>Upcoming Exams 📄</p>
          </div>
        </div>
      </div>

      {/* Active Trainers */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="p-3 rounded shadow" style={{ backgroundColor: "#d8f275" }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold">Active Trainers</h6>
              <button className="btn btn-dark btn-sm" onClick={() => setShowAddModal(true)}>+ Add New</button>
            </div>
            {trainers.map((trainer, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-2 p-2 bg-white rounded shadow-sm">
                <div className="d-flex align-items-center">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="rounded-circle me-2"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                  />
                  <div>
                    <div className="fw-semibold">{trainer.name}</div>
                    <small className="text-muted">{trainer.role}</small>
                  </div>
                </div>
                <button className="btn btn-outline-dark btn-sm">15 Trainees</button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Exams */}
        <div className="col-md-6 mb-3">
          <div className="p-3 rounded shadow" style={{ backgroundColor: "#d8f275" }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="fw-bold">Upcoming Exams</h6>
              <button className="btn btn-dark btn-sm" onClick={() => navigate("/Development")}>
                Upload New Exam
              </button>
            </div>
            {[
              { title: "Figma Technical Questions", date: "July 15, 2025", time: "2:30 PM", duration: "30 Minutes" },
              { title: "Figma Practical Questions", date: "July 16, 2025", time: "4:00 PM", duration: "1 Day" },
            ].map((exam, idx) => (
              <div key={idx} className="bg-white p-2 mb-2 rounded">
                <div className="fw-semibold">{exam.title}</div>
                <small className="text-muted">Duration: {exam.duration}</small>
                <div className="fw-bold mt-1">{exam.date} - {exam.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upload Question Paper */}
      
      <div
        className="border border-dashed rounded p-4 text-center"
        style={{ borderColor: "#ccc", borderStyle: "dashed" }}
      >
        <div>📤</div>
        <p>Drag and drop your files here or</p>
        <input type="file" multiple onChange={handleFileChange} className="form-control mb-2" />
        <small className="text-muted d-block mt-2">
          Supported formats: PDF, DOC, DOCX (Max: 10MB)
        </small>
        {uploadedFiles.length > 0 && (
          <div className="mt-3 text-start">
            <strong>Uploaded Files:</strong>
            <ul>
              {uploadedFiles.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Add Trainee Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Trainee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-2"
            value={newTrainee.name}
            onChange={(e) => setNewTrainee({ ...newTrainee, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            className="form-control"
            value={newTrainee.role}
            onChange={(e) => setNewTrainee({ ...newTrainee, role: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddTrainee}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

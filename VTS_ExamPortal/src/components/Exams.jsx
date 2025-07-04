import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Exams.css';

const Exams = () => {
  const navigate = useNavigate();

  const handleStartExam = () => {
    navigate('/exam/questions');
  };

  return (
    <div className="exams-page">
      <h4>Upcoming Exams</h4>
      <div className="exam-card mt-4">
        <h5>Exam Name: Figma Technical Questions</h5>
        <p><strong>Date:</strong> 05-07-2025</p>
        <p><strong>Time:</strong> 10:00 AM</p>
        <p><strong>Duration:</strong> 30 mins</p>
        <button className="btn btn-dark" onClick={handleStartExam}>Start Exam</button>
      </div>
    </div>
  );
};

export default Exams;

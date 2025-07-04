import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TraineeDetails.css';

const TraineeDetails = () => {
  const navigate = useNavigate();

  const handleUpcomingExams = () => {
    navigate('/exam');
  };

  return (
    <div className="trainee-details">
      <h4>Welcome Kavya</h4>
      <div className="detail-section mt-4">
        <h6>Course Name: UI/UX Design</h6>
        <p><strong>Duration:</strong> 90 Days</p>
        <p><strong>Mode:</strong> Online</p>
        <p><strong>Email:</strong> Kavyauiux@vts.in</p>
        <p><strong>Phone:</strong> 9156800278</p>
        <button className="btn btn-dark" onClick={handleUpcomingExams}>Upcoming Exams</button>
      </div>
    </div>
  );
};

export default TraineeDetails;

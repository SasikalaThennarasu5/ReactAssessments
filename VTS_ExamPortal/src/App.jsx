import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar1 from "./components/Sidebar1";
import Login from "./components/Login";
import Overview from "./components/Overview";
import Designing from "./components/Designing";
import OnlineTrainees from "./components/OnlineTrainees";
import OfflineTrainees from "./components/OfflineTrainees";
import Welcome from "./components/Welcome";
import UpcomingExams from "./components/UpcomingExams";
import FigmaTechnicalQuestions from "./components/FigmaTechnicalQuestions";
import FigmaTechnicalQuestionsCont from "./components/FigmaTechnicalQuestionsCont";
import ThankYou from "./components/ThankYou";
import Result from "./components/Result";
import "./App.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLoginSuccess = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };

  if (!loggedIn) {
    return (
      <Router>
        <Login onLoginSuccess={handleLoginSuccess} />
      </Router>
    );
  }

  return (
    <Router>
      <Sidebar1 username={username} />
      <div className="main-content p-3" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" />} />

          {/* Overview */}
          <Route path="/overview" element={<Overview username={username} />} />

          {/* Designing */}
          <Route path="/designing" element={<Designing username={username} />} />
          <Route path="/online-trainees" element={<OnlineTrainees username={username} />} />
          <Route path="/offline-trainees" element={<OfflineTrainees username={username} />} />

          {/* Welcome */}
          <Route path="/welcome" element={<Welcome username={username} />} />

          {/* Exams */}
          <Route path="/upcoming-exams" element={<UpcomingExams username={username} />} />
          <Route path="/figma-technical-questions" element={<FigmaTechnicalQuestions username={username} />} />
          <Route path="/figma-technical-questions-cont" element={<FigmaTechnicalQuestionsCont username={username} />} />

          {/* Thank You & Result */}
          <Route path="/thank-you" element={<ThankYou username={username} />} />
          <Route path="/result" element={<Result username={username} />} />
        </Routes>
      </div>
    </Router>
  );
}

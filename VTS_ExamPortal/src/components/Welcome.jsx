import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, ProgressBar, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Welcome({ username }) {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarMonth, setCalendarMonth] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const getGreeting = () => {
    const hour = currentDate.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const exams = [
    { title: "Figma Technical Questions", date: new Date("2025-07-15T14:30:00"), duration: "30 Minutes" },
    { title: "Figma Practical Questions", date: new Date("2025-07-16T16:00:00"), duration: "1 Day" },
  ];

  const handleUpcomingExamsClick = () => {
    navigate("/upcoming-exams");
  };

  const getCalendarDays = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const calendar = Array(firstDay).fill(null);
    for (let i = 1; i <= daysInMonth; i++) calendar.push(i);
    return calendar;
  };

  const calendarDays = getCalendarDays(calendarMonth.getFullYear(), calendarMonth.getMonth());

  const isExamDate = (day) => {
    return exams.find((exam) => {
      return (
        exam.date.getDate() === day &&
        exam.date.getMonth() === calendarMonth.getMonth() &&
        exam.date.getFullYear() === calendarMonth.getFullYear()
      );
    });
  };

  const changeMonth = (offset) => {
    const newMonth = new Date(calendarMonth);
    newMonth.setMonth(newMonth.getMonth() + offset);
    setCalendarMonth(newMonth);
  };

  return (
    <div className="container mt-3" style={{ fontFamily: "Urbanist, sans-serif" }}>
      {/* Header */}
      <div className="mb-3">
        <h5 className="fw-bold">{getGreeting()}, {username}!</h5>
        <p className="text-muted">{formattedDate} | {formattedTime}</p>
      </div>

      <Row className="g-4">
        {/* Left - Upcoming Exams */}
        <Col xs={12} md={4}>
          <div className="p-3" style={{ backgroundColor: "#e6f985", borderRadius: "8px" }}>
            <h6>Upcoming Exams</h6>
            {exams.map((exam, idx) => (
              <div key={idx} className="p-2 bg-white rounded shadow-sm mb-2">
                <strong>{exam.title}</strong>
                <div className="small text-muted">Duration: {exam.duration}</div>
                <div className="small fw-bold">
                  {exam.date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} - {exam.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            ))}
            <button className="btn btn-dark btn-sm mt-2" onClick={handleUpcomingExamsClick}>
              View All Exams
            </button>
          </div>
        </Col>

        {/* Right - Profile, Progress, Calendar */}
        <Col xs={12} md={8}>
          <div className="p-3" style={{ backgroundColor: "#e6f985", borderRadius: "8px" }}>
            {/* Profile */}
            <div className="text-center mb-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt={username}
                className="rounded-circle"
                width="80"
                height="80"
              />
              <h6 className="mt-2">{username}</h6>
              <p className="mb-1">UI/UX Designing</p>
            </div>

            {/* Course Progress */}
            <div className="mb-3">
              <h6>Course Progress</h6>
              <label>Figma</label>
              <ProgressBar now={95} variant="success" className="mb-2" />
              <label>Adobe Photoshop</label>
              <ProgressBar now={20} variant="warning" />
            </div>

            {/* Calendar */}
            <div>
              <h6>Exam Calendar</h6>
              <div className="bg-dark text-white text-center p-2 rounded">
                <div className="d-flex justify-content-between mb-2">
                  <button className="btn btn-light btn-sm" onClick={() => changeMonth(-1)}>←</button>
                  <p className="mb-0">
                    {calendarMonth.toLocaleString("default", { month: "long" })} {calendarMonth.getFullYear()}
                  </p>
                  <button className="btn btn-light btn-sm" onClick={() => changeMonth(1)}>→</button>
                </div>
                <div className="d-flex justify-content-around small mt-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => <div key={d}>{d}</div>)}
                </div>
                <div className="d-flex flex-wrap mt-2 text-center">
                  {calendarDays.map((day, i) => {
                    if (!day) {
                      return <div key={i} style={{ width: "14%", padding: "2px" }}></div>;
                    }
                    const exam = isExamDate(day);
                    return (
                      <OverlayTrigger
                        key={i}
                        placement="top"
                        overlay={
                          exam ? (
                            <Tooltip>{exam.title}<br />{exam.duration}</Tooltip>
                          ) : <></>
                        }
                      >
                        <div
                          style={{ width: "14%", padding: "2px", fontSize: "12px" }}
                          className={`${exam ? "bg-warning text-dark rounded-circle" : ""}`}
                        >
                          {day}
                        </div>
                      </OverlayTrigger>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

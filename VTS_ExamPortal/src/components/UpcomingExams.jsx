import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  addMonths,
  subMonths,
  isSameDay,
  isSameMonth,
  parse
} from "date-fns";

export default function UpcomingExams({ username }) {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
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
    { title: "Figma Technical Questions", date: "2025-07-15", time: "2:30 PM", duration: "30 Minutes" },
    { title: "Figma Practical Questions", date: "2025-07-16", time: "4:00 PM", duration: "1 Day" },
  ];

  const handleExamClick = () => {
    navigate("/figma-technical-questions");
  };

  const renderCalendarCells = () => {
    const monthStart = startOfMonth(calendarDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const isExamDate = exams.some(
          (exam) => isSameDay(parse(exam.date, "yyyy-MM-dd", new Date()), cloneDay)
        );
        days.push(
          <div
            className={`text-center small py-1 ${!isSameMonth(day, monthStart) ? "text-muted" : ""} ${
              isExamDate ? "bg-warning text-dark rounded-circle" : ""
            }`}
            key={day}
            style={{ width: "14%" }}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="d-flex w-100" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="container mt-3" style={{ fontFamily: "Urbanist, sans-serif" }}>
      {/* Greeting and Time */}
      <div className="mb-3">
        <h5 className="fw-bold">{getGreeting()}, {username}!</h5>
        <p className="text-muted">{formattedDate} | {formattedTime}</p>
      </div>

      <div className="row">
        {/* Left Column - Exams List */}
        <div className="col-md-6 mb-3">
          <div className="p-3" style={{ backgroundColor: "#e6f985", borderRadius: "8px" }}>
            <h6>Upcoming Exams</h6>
            {exams.map((exam, index) => (
              <div
                key={index}
                className="p-2 bg-white rounded shadow-sm mb-2"
                style={{ cursor: "pointer" }}
                onClick={handleExamClick}
              >
                <strong>{exam.title}</strong>
                <div className="small text-muted">Duration: {exam.duration}</div>
                <div className="small fw-bold">{format(parse(exam.date, "yyyy-MM-dd", new Date()), "MMM d, yyyy")} - {exam.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Calendar */}
        <div className="col-md-6 mb-3">
          <div className="p-3" style={{ backgroundColor: "#e6f985", borderRadius: "8px" }}>
            <h6>Exam Calendar</h6>
            <div className="bg-dark text-white text-center p-2 rounded">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <button className="btn btn-sm btn-light" onClick={() => setCalendarDate(subMonths(calendarDate, 1))}>◀</button>
                <strong>{format(calendarDate, "MMMM yyyy")}</strong>
                <button className="btn btn-sm btn-light" onClick={() => setCalendarDate(addMonths(calendarDate, 1))}>▶</button>
              </div>
              <div className="d-flex justify-content-around small">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>
              {renderCalendarCells()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

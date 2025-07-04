import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ArjunImg from "../assets/images/img1.png";
import MeeraImg from "../assets/images/img2.png";
import VarunImg from "../assets/images/img3.png";
import LakshmiImg from "../assets/images/img5.png";
import VikramImg from "../assets/images/img3.png";
import AnjaliImg from "../assets/images/img2.png";

export default function OfflineTrainees() {
  const navigate = useNavigate();

  const trainees = [
    {
      name: "Arjun",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "arjun.uiux@vts.in",
      phone: "9876500011",
      image: ArjunImg,
    },
    {
      name: "Meera",
      duration: "60 Days",
      course: "Web Development",
      mode: "Offline",
      email: "meera.web@vts.in",
      phone: "9876500022",
      image: MeeraImg,
    },
    {
      name: "Varun",
      duration: "45 Days",
      course: "Graphic Design",
      mode: "Offline",
      email: "varun.graphic@vts.in",
      phone: "9876500033",
      image: VarunImg,
    },
    {
      name: "Lakshmi",
      duration: "120 Days",
      course: "UI/UX Design",
      mode: "Offline",
      email: "lakshmi.uiux@vts.in",
      phone: "9876500044",
      image: LakshmiImg,
    },
    {
      name: "Vikram",
      duration: "30 Days",
      course: "Digital Marketing",
      mode: "Offline",
      email: "vikram.marketing@vts.in",
      phone: "9876500055",
      image: VikramImg,
    },
    {
      name: "Anjali",
      duration: "75 Days",
      course: "Frontend Development",
      mode: "Offline",
      email: "anjali.frontend@vts.in",
      phone: "9876500066",
      image: AnjaliImg,
    },
  ];

  return (
    <div className="p-4 font-urbanist">
      {/* Breadcrumb Heading */}
      <h6 className="mb-4">
        Trainer Name &gt; Online Trainees &gt; <span className="fw-bold">Offline Trainees</span>
      </h6>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {trainees.map((trainee, index) => (
          <Col key={index}>
            <Card
              style={{
                backgroundColor: "#e4f7a8",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
              className="h-100"
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    <img
                      src={trainee.image}
                      alt={trainee.name}
                      className="rounded-circle me-2"
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                    />
                    <strong>{trainee.name}</strong>
                  </div>
                  <span style={{ cursor: "pointer" }}>✏️</span>
                </div>

                <div className="mb-2">
                  <strong>Duration:</strong> {trainee.duration}
                </div>
                <div className="mb-2">
                  <strong>Course Name:</strong> {trainee.course}
                </div>
                <div className="mb-2">
                  <strong>Class Mode:</strong> {trainee.mode}
                </div>
                <div className="mb-2">📧 {trainee.email}</div>
                <div className="mb-3">📞 {trainee.phone}</div>

                <Button
                  variant="dark"
                  size="sm"
                  className="px-3 py-1"
                  style={{ float: "right" }}
                  onClick={() => navigate("/welcome")}
                >
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

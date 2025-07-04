import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import KavyaImg from "../assets/images/img1.png";
import ReshmaImg from "../assets/images/img2.png";
import PriyaImg from "../assets/images/img3.png";
import RithikaImg from "../assets/images/img5.png";
import SathyaImg from "../assets/images/img3.png";
import DivyaImg from "../assets/images/img1.png";

export default function OnlineTrainees() {
  const navigate = useNavigate();

  const trainees = [
    {
      name: "Kavya",
      duration: "90 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "kavya.uiux@vts.in",
      phone: "9156800278",
      image: KavyaImg,
    },
    {
      name: "Reshma",
      duration: "60 Days",
      course: "Web Development",
      mode: "Online",
      email: "reshma.web@vts.in",
      phone: "9876543210",
      image: ReshmaImg,
    },
    {
      name: "Priya",
      duration: "45 Days",
      course: "Graphic Design",
      mode: "Online",
      email: "priya.graphic@vts.in",
      phone: "9123456789",
      image: PriyaImg,
    },
    {
      name: "Rithika",
      duration: "120 Days",
      course: "UI/UX Design",
      mode: "Online",
      email: "rithika.uiux@vts.in",
      phone: "9454254251",
      image: RithikaImg,
    },
    {
      name: "Sathya",
      duration: "30 Days",
      course: "Digital Marketing",
      mode: "Online",
      email: "sathya.marketing@vts.in",
      phone: "8554251512",
      image: SathyaImg,
    },
    {
      name: "Divya",
      duration: "75 Days",
      course: "Frontend Development",
      mode: "Online",
      email: "divya.frontend@vts.in",
      phone: "7042521503",
      image: DivyaImg,
    },
  ];

  return (
    <div className="p-4 font-urbanist">
      {/* Breadcrumb Heading */}
      <h6 className="mb-4">
        Trainer Name &gt; <span className="fw-bold">Online Trainees</span> &gt; Offline Trainees
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

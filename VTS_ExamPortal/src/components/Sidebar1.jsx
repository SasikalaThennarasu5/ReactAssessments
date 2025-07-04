import React, { useState } from "react";
import { Nav, Navbar, Container, Button, Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setShowMobileMenu(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar d-none d-md-flex flex-column justify-content-between p-3 text-white bg-dark">
        <div>
          <h5 className="text-center fw-bold mb-4">VTS Exam Portal</h5>
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleNavigate("/overview")} className="nav-item text-white">📊 Overview</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/designing")} className="nav-item text-white">✏️ Designing</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/welcome")} className="nav-item text-white">📤 Development</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/upcoming-exams")} className="nav-item text-white">📝 Exam</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/result")} className="nav-item text-white">🔍 Result</Nav.Link>
          </Nav>
        </div>
      </div>

      {/* Mobile / Tablet Top Navbar */}
      <Navbar bg="dark" variant="dark" expand={false} className="d-md-none">
        <Container fluid>
          <Navbar.Brand>VTS Exam Portal</Navbar.Brand>
          <Button variant="light" size="sm" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            ☰ Menu
          </Button>
        </Container>
      </Navbar>

      {/* Mobile Menu Items (Vertical under navbar when toggled) */}
      <Collapse in={showMobileMenu}>
        <div className="bg-dark text-white d-md-none p-2">
          <Nav className="flex-column">
            <Nav.Link onClick={() => handleNavigate("/overview")} className="text-white">📊 Overview</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/designing")} className="text-white">✏️ Designing</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/welcome")} className="text-white">📤 Development</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/upcoming-exams")} className="text-white">📝 Exam</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("/result")} className="text-white">🔍 Result</Nav.Link>
          </Nav>
        </div>
      </Collapse>
    </>
  );
}

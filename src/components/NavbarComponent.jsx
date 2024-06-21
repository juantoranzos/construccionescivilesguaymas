import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MagicTabSelect } from 'react-magic-motion';
import logo from '../img/logo.png'

const pillTabs = [
  { text: "Inicio", path: "/" },
  { text: "Acerca de Nosotros", path: "/about" },
  { text: "Servicios", path: "/services" },
  { text: "Contáctanos", path: "/contacto" },
];

const NavbarComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const tabsComponents = pillTabs.map((tab, i) => {
    return (
      <Nav.Link
        key={tab.text}
        as={Link}
        to={tab.path}
        onMouseEnter={() => setHoveredIndex(i)}
        style={{
          position: "relative",
          padding: "0.65rem 0.75rem",
          backgroundColor: "transparent",
          color: "white",
          border: 0,
          borderRadius: "999px",
          textDecoration: "none"
        }}
      >
        {hoveredIndex === i && (
          <MagicTabSelect
            id="pillTabs"
            transition={{ type: "spring", bounce: 0.35 }}
          >
            <span
              style={{
                borderRadius: "999px",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
                backgroundColor: "#FFFF99 ",
                mixBlendMode: "difference"
              }}
            />
          </MagicTabSelect>
        )}
        {tab.text}
      </Nav.Link>
    );
  });

  return (
    <header className="header">
      <Navbar expand="lg" style={{ backgroundColor: '#043152' }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}  // Ruta corregida sin "public"
              alt="Logo"
              className="rounded img-fluid w-100" 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto p-3">
              {tabsComponents}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarComponent;

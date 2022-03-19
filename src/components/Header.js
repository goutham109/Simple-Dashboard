import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Simple Dashboard</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Arthur Morgan</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

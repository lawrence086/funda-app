import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

const NewNav = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" sticky='bottom'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">
            <i className="bi bi-house-door nav-icon active"></i>
            </Nav.Link>
            <Nav.Link href="#features">
            <i className="bi bi-person-fill nav-icon"></i>
            </Nav.Link>
            <Nav.Link href="#pricing">
            <i className="bi bi-person-square nav-icon"></i>
            </Nav.Link>
            <Nav.Link href="#pricing">
            <i className="bi bi-plus-square-fill nav-icon"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NewNav
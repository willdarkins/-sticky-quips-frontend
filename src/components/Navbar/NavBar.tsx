import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../Navbar/NavBar.css'

const NavBar = () => {
  return (
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Stikcy Quips</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link >About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar
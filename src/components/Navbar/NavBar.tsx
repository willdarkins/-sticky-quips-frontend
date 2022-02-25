import React from 'react'
import { useState } from 'react'
import { Container, Modal, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Stikcy Quips</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleShow}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Sticky Quips!</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is an application inspired by an <a href='https://www.youtube.com/watch?v=tPsnzxE-9Gc' target='blank' rel='noopener noreferrer'>episode of The Office </a>
         where you can keep track of thoughts and ideas, attach links to those thoughts/ideas, and get on with your day! Get started by hitting the
        black "+" button in the bottom right corner. Enjoy!
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NavBar
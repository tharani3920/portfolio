import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-info p-4">
    <Container>
      <Navbar.Brand href="/" className='fw-bold nav-heading'>Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
          <Nav.Link href="/about" className='nav-link'>About</Nav.Link>
          <Nav.Link href="/service" className='nav-link'>Service</Nav.Link>
          <Nav.Link href="/blog" className='nav-link'>Blog</Nav.Link>
          <Nav.Link href="/contact" className='nav-link'>Contact</Nav.Link>

          {/* <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Blog
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
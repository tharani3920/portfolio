import React,{useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { gsap } from 'gsap';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.from(".nav-heading", { y: -50, opacity: 0, duration: 1, delay: 0.2 })
      .from(".nav-link", { y: -50, opacity: 0, duration: 0.5, stagger: 0.2 }, "-=0.5");

  }, []);
  return (
    <Navbar expand="lg" className="bg-info p-4">
    <Container>
      <Navbar.Brand href="/" className='fw-bold nav-heading'>Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
          <Nav.Link href="/About" className='nav-link'>About</Nav.Link>
          <Nav.Link href="/Services" className='nav-link'>Service</Nav.Link>
          <Nav.Link href="/Blogs" className='nav-link'>Blog</Nav.Link>
          <Nav.Link href="/Contact" className='nav-link'>Contact</Nav.Link>

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
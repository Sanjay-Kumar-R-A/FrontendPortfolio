import Form from 'react-bootstrap/Form';
import { Navbar, Nav, Container } from "react-bootstrap";
import React from 'react';
import { useUserContext } from './contextAPI';

export function NavBar() {

  const { scrollPercentage } = useUserContext();

  return (
    <>
      <Navbar expand={"md" || "lg" || "xl"} className="bg-black">
        <Container fluid>
          <Navbar.Brand href="/" className='text-white'> <h4><b>&#123; SK PORTFOLIO &#125; </b></h4>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
  <Nav
    className="ms-auto my-2 my-lg-0 font-bold mh-100"
    navbarScroll
    variant="pills"
    defaultActiveKey="/homepage">
    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
    <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
    <Nav.Link href="#project" className="text-white">Projects</Nav.Link>
    <Nav.Link href="#connect" className="text-white">Contact</Nav.Link>
    <Nav.Link href="#about" className="text-white">About</Nav.Link>
  </Nav>
</Navbar.Collapse>

        </Container>
      </Navbar>
      <div className='fixed top-20 z-0 w-100'>
        <div className='w-100 h-2 bg-amber-200'>
          <div className='h-2 bg-violet-900 w-0' style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>
    </>
  );
};
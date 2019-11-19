// import { Link } from "gatsby"
import PropTypes from "prop-types"
//  import Img from 'gatsby-image'
import React from "react";
//  import Image from './image'
import {Navbar,Nav } from 'react-bootstrap'
// import logo from '../images/logo.png'
// import Image from "../components/image"
import { Link } from "gatsby";
import bg from '../images/bg-academic-p.jpg'
import './header.css'

const Header = ({ siteTitle }) => (



  <header>
<Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home" className="text-white">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto ">
      <Link to="/"><Nav.Link className="text-white" href="#home">Home</Nav.Link></Link>
      <Link to="/About"><Nav.Link className="text-white" href="#link">About</Nav.Link></Link>
      <Link to="/Blog"><Nav.Link className="text-white" href="#link">Blog</Nav.Link></Link>
      <Link to="/Blog"><Nav.Link className="text-white" href="#link">Services</Nav.Link></Link>
      <Link to="/Contact"><Nav.Link className="text-white" href="#link">Contact</Nav.Link></Link>
      {/* <NavDropdown title="Services" id="basic-nav-dropdown" className="text-white">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    <img src={bg} className="d-block w-100 h-200" alt="hello" style={{ height: "300px" }} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

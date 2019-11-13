// import { Link } from "gatsby"
import PropTypes from "prop-types"
//  import Img from 'gatsby-image'
import React from "react";
//  import Image from './image'
 import logo from '../images/logo.png'
import { Link } from "gatsby";


const Header = ({ siteTitle }) => (


  
  <header>
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#000000"}}>
      <a className="navbar-brand mt-2" href="#">
        {/* <Img src={logo}/> */}
  <img src ={logo} alt="hello" style={{width:'150px'}}/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item ">
            <Link to=""><a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item ">
          <Link to="/About"><a className="nav-link text-white" href="#">About</a></Link>
          </li>
          <li className="nav-item ">
            <Link to="/Blog"><a className="nav-link text-white" href="#">Blog</a></Link>
          </li>
          {/* <li className="nav-item dropdown active">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
        </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
          <li className="nav-item ">
            <Link to="/Contact"><a className="nav-link text-white" href="#" tabIndex={-1} aria-disabled="true">contact</a></Link>
          </li>
        </ul>
      </div>
    </nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

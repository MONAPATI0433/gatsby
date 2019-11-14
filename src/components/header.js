// import { Link } from "gatsby"
import PropTypes from "prop-types"
//  import Img from 'gatsby-image'
import React from "react";
//  import Image from './image'
import logo from '../images/logo.png'
import Image from "../components/image"
import { Link } from "gatsby";
import bg from '../images/bg-academic-p.jpg'
import './header.css'

const Header = ({ siteTitle }) => (



  <header>
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#000000" }}>
      <a className="navbar-brand mt-2" href="#">
        {/* <Img src={logo}/> */}
        <img src={logo} alt="hello" style={{ width: '150px' }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white" />
        <i  class="eicon-menu-bar" aria-hidden="true"></i>
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
<nav aria-label="breadcrumb" >
  <ol class="breadcrumb" style={{backgroundColor:"#404040"}}>
    <li class=" ml-3 text-white" style={{fontSize:"15px"}} aria-current="page"><span className="text-white" style={{fontWeight:"bold"}}>AI Strategy:</span> &nbsp;Transformation |</li>
    <li class="text-white" style={{fontSize:"15px"}} aria-current="page">Innovation |</li>
    <li class="text-white" style={{fontSize:"15px"}} aria-current="page"> Disruption</li>
  </ol>
</nav>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* <img src="..."  alt="..." /> */}
          <img src={bg} className="d-block w-100 h-200" alt="hello" style={{height:"500px"}}/>
          <div class="carousel-caption  d-md-block ">
            <h1>statrtups</h1>
            <p>AIQRATE enable SMBs to accelerate strategic and operational business goals</p>
            <span>with ready to deploy Al adoption roadmaps</span>
            <button type="button" class="btn btn-light">MORE INFO</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={bg} className="d-block w-100" alt="hello"  style={{height:"500px"}}/>
          <div class="carousel-caption  d-md-block ">
            <h1>statrtups</h1>
            <p>AIQRATE enable SMBs to accelerate strategic and operational business goals</p>
            <span>with ready to deploy Al adoption roadmaps</span>
            <button type="button" class="btn btn-light">MORE INFO</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src={bg} className="d-block w-100" alt="hello"style={{height:"500px"}} />
          <div class="carousel-caption  d-md-block ">
            <h1>statrtups</h1>
            <p>AIQRATE enable SMBs to accelerate strategic and operational business goals</p>
            <span>with ready to deploy Al adoption roadmaps</span>
            <button type="button" class="btn btn-light">MORE INFO</button>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

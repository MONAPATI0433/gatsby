
import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import logo from '../images/logo.png'
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //     query SiteTitleQuery {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)

  return (
    <>
      <Header />
      <div
        style={{
          // margin: `0 auto`,
          maxWidth: "100%",
          // padding: `0px 1.0875rem 1.45rem`,
          // paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>

          {/* <div id="footer" >
            <div className="container-fluid" style={{ backgroundColor: "#000000"}}>
              <div className="row text-center text-xs-center text-sm-left text-md-left">
                <div className="col-xs-12 col-sm-4 col-md-4 mt-4">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links "style={{ fontSize:"12px",fontWeight:"bold" }}>
                    <img src={logo} alt="hello" style={{ width: '250px' }} />
                    <li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i>Consult@aiqrate.ai</a></li>
                    <li><a href="">Bangalore | Delhi | Hyderabad</a></li>
                    <li><a href="">Privacy Policy | Terms of Use</a></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 mt-5">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links" style={{ fontSize: "12px", fontWeight: "bold" }}>
                    <li><a href="">AIQRATE Engagement Model</a></li>
                    <li><a href="">AIQRATIONS</a></li>
                    <li><a href="">AIQRATE Team </a></li>
                    <li><a href="">Contact Us</a></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 mt-5">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                    <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook facebook fa-1x" /></a></li>
                    <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter twitter fa-1x" /></a></li>
                    <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram instagram fa-1x" /></a></li>
                    <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus google-plus fa-1x" /></a></li>
                    <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope envelope fa-1x" /></a></li>
                  </ul>
                </div>
              </div> */}
          {/* <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                    <ul className="list-unstyled list-inline social text-center">
                      
                    </ul>
                  </div>
                </div> */}
          <div className="row" style={{ backgroundColor: "#343a40", fontWeight: "bold" }}>
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              {/* <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p> */}
              <p className="h6 bold" style={{ fontSize: "15px", fontWeight: "400" }}>
                © {new Date().getFullYear()}, Built with &
            {` `}
                <a href="http://jellyglass.com/" className="text-center text-white">jellyglass Software Pvt Ltd</a>
                <a className="text-green ml-2" href="https://www.sunlimetech.com"></a></p>
            </div>
          </div>
          {/* </div>
          </div> */}

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          // margin: `0 auto`,
          maxWidth:"100%",
          // padding: `0px 1.0875rem 1.45rem`,
          // paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
         
          <div id="footer">
            <div className="container-fluid">
              <div className="row text-center text-xs-center text-sm-left text-md-left">
                <div className="col-xs-12 col-sm-4 col-md-4 mt-3">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links ">
                    <li><a href=""><i className="fa fa-angle-double-right" />Home</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />About</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />FAQ</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />Get Started</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />Videos</a></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 mt-3">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                    <li><a href=""><i className="fa fa-angle-double-right" />Home</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />About</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />FAQ</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />Get Started</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />Videos</a></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 mt-3">
                  <h5>Quick links</h5>
                  <ul className="list-unstyled quick-links">
                    <li><a href=""><i className="fa fa-angle-double-right" />Home</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />About</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />FAQ</a></li>
                    <li><a href=""><i className="fa fa-angle-double-right" />Get Started</a></li>
                    <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right" />Imprint</a></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                  <ul className="list-unstyled list-inline social text-center">
                    <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook" /></a></li>
                    <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter" /></a></li>
                    <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram" /></a></li>
                    <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus" /></a></li>
                    <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                  <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                  <p className="h6">
                     © {new Date().getFullYear()}, Built with
          {` `}
          <a href="http://jellyglass.com/">jellyglass Software Pvt Ltd</a>
                    <a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank"></a></p>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

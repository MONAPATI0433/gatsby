import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <div className="container">
      <div className="col-12 mt-4">
        <div className="row">
          <h6 className="info">Venture Capital and Private Equity firms are feverishly focusing on making strategic investments in AI startups, niche
            and boutique firms. However, the AI startup ecosystem space is deficient in syndicated insights, topical AI trends and
        differentiated metrics based on which VC & PE firms can make informed investment decisions.</h6>
          <h6 className="info">Through our extensive<strong> M&A, fund raising, due diligence experience in the AI arena,</strong> AIQRATE provides
            consultative insights and services across the spectrum of the global AI market and regional players with deep
          competencies and unique differentiators</h6>
        </div>
        <div className="row">
          <h4 className="">AIQRATIONS</h4>
        </div>
        <hr style={{marginTop:"-20px"}}></hr>
      </div>
    </div>
  </Layout>
)

export default IndexPage

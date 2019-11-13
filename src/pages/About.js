import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => {
    return(
        <Layout>
            <h1>This About Page</h1>
            <p>this video uses npx, which is a tool to execute an npm package without first installing it. 
                Running the command npx gatsby new is the same as running gatsby new after installing the gatsby-cli on your computer.</p>
                <p>This is<Link to="/Contact">contact information</Link></p>
        </Layout>
    )
}

export default AboutPage

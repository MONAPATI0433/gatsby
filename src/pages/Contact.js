import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout>
            <h1>This is Contact Page</h1>
            <p>this video uses npx, which is a tool to execute an npm package without first installing it. 
                Running the command npx gatsby new is the same as running gatsby new after installing the gatsby-cli on your computer.</p>
            <p>Go for it<Link to="/About">www.JellyGlass.com</Link></p>
        </Layout>
    )
}

export default ContactPage
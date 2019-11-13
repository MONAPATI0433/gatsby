import React from 'react'
import Layout from '../components/layout'

const BlogePage = () => {
    return(
        <Layout>
            <h1>This is Blog Page</h1>
            <ol>
                <li>
                    <h1>React</h1>
                    <p>2018-04-02</p>
                </li>
                <li>
                    <h1>Gatsby</h1>
                    <p>2018-04-02</p>
                </li>
            </ol>
        </Layout>
    )
}

export default  BlogePage
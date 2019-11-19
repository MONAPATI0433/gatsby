import React from 'react'
import Layout from '../components/layout'
import { Col, Container, Row } from 'react-bootstrap'
import { graphql, useStaticQuery, Link } from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogePage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter{
                        title
                        date
                    }   
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)

    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={4}>
                        {/* <h1>This is Blog Page</h1> */}
                        <ol className={blogStyles.posts}>
                            {data.allMarkdownRemark.edges.map((edge) => {
                                return (
                                    <li className={blogStyles.post}>
                                        <Link to={`/blog/${edge.node.fields.slug}`}>
                                            <h5>{edge.node.frontmatter.title}</h5>  </Link>
                                        <p>{edge.node.frontmatter.date}</p>

                                    </li>
                                )
                            })}
                        </ol>
                    </Col>
                    <Col md={4}>
                        {/* <h1>This is Blog Page</h1> */}
                        <ol className={blogStyles.posts}>
                            {data.allMarkdownRemark.edges.map((edge) => {
                                return (
                                    <li className={blogStyles.post}>
                                        <Link to={`/blog/${edge.node.fields.slug}`}>
                                            <h5>{edge.node.frontmatter.title}</h5>   </Link>
                                            <p>{edge.node.frontmatter.date}</p>
                                     
                                    </li>
                                )
                            })}
                        </ol>
                    </Col>
                    <Col md={4}>
                        {/* <h1>This is Blog Page</h1> */}
                        <ol className={blogStyles.posts}>
                            {data.allMarkdownRemark.edges.map((edge) => {
                                return (
                                    <li className={blogStyles.post}>
                                        <Link to={`/blog/${edge.node.fields.slug}`}>
                                            <h5>{edge.node.frontmatter.title}</h5> </Link>
                                            <p>{edge.node.frontmatter.date}</p>
                                       
                                    </li>
                                )
                            })}
                        </ol>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default BlogePage
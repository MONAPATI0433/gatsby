import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Col, Container, Row } from 'react-bootstrap'

export const query = graphql`
query($slug : String!) {
  markdownRemark (fields: { slug: {eq: $slug}}) {
  frontmatter{
    title
    date
  }
    html
  }
  }
`
const Blog = (props) => {

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={6}>
            <h5>{props.data.markdownRemark.frontmatter.title}</h5>
            <h5>{props.data.markdownRemark.frontmatter.date}</h5>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
          </Col>
        </Row>
      </Container>
    </Layout>

  )
}
export default Blog
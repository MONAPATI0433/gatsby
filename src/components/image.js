import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq:"bg-academic-p.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1000,maxHeight:400) {
            ...GatsbyImageSharpFluid
          }
        }
        
      }
    }
    
  `)







  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />





}

export default Image

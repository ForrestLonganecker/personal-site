import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const PuppyPicture = () => {
  const data = useStaticQuery(graphql`
    query {
      PuppyPicture: file(relativePath: { eq: "Puppy_picture.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 343) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return <Img
            fluid={data.PuppyPicture.childImageSharp.fluid}
            style={{
              width: `100%`,
              border: `solid 5px #4CAF50`
            }}
          />
}

export default PuppyPicture
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Sendipedia = () => {
  const data = useStaticQuery(graphql`
    query {
      SendipediaPicture: file(relativePath: { eq: "Sendipedia-mobile-screenshot-landing.png"}) {
        childImageSharp {
          fluid(maxWidth: 343) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  return <Img
            fluid={data.SendipediaPicture.childImageSharp.fluid}
            style={{
              width: `100%`
            }}
          />
}

export default Sendipedia
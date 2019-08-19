import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Hangtrainer = () => {
  const data = useStaticQuery(graphql`
    query {
      HangtrainerPicture: file(relativePath: { eq: "Hangtrainer-mobile-screenshot-create.png"}) {
        childImageSharp {
          fluid(maxWidth: 343) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
            fluid={data.HangtrainerPicture.childImageSharp.fluid}
            style={{
              width: `100%`
            }}
          />
}

export default Hangtrainer
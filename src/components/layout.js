import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import {Nav, Navbar} from 'react-bootstrap'
import Img from 'gatsby-image'
import Metadata from './metadata'

import './bootstrap.min.css'
import './layout.css'
import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';


export default (props) => (
  <StaticQuery
        query={graphql` {
      logoImage: file(relativePath: { eq: "womenlogo_light.jpg" }) {
        childImageSharp {
          fixed(width: 60) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
     
      bannerImage: file(relativePath: { eq: "womenbanner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `}
    render={data => ( <>

            <div className={'container'}><div id='content' className={props.className}>{props.children}</div></div>

        </>
    )}
  />
)

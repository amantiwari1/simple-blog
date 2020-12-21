import React from "react"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"
import { graphql, useStaticQuery } from "gatsby"

export const Footer = () => {
  const data1 = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "fb.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "ig.svg" }) {
        publicURL
      }
      linkedIn: file(relativePath: { eq: "ld.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "gh.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://www.fb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="30px" src={data1.facebook.publicURL} alt="fb" />
          </a>
          <a
            href="https://www.fb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="30px" src={data1.facebook.publicURL} alt="fb" />
          </a>
          <a
            href="https://www.fb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="30px" src={data1.facebook.publicURL} alt="fb" />
          </a>
          <a
            href="https://www.fb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="30px" src={data1.facebook.publicURL} alt="fb" />
          </a>
        </FooterSocialIcons>
        <P size="xsmall" color="dark3">
          @ 2020 Copyright
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}

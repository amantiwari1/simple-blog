import React from "react"
import { NavWrapper } from "../elements"
import { Link, useStaticQuery, graphql } from "gatsby"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <NavWrapper>
      <Link to="/">
        <img  src={data.logo.publicURL} alt="my logo" />
      </Link>
    </NavWrapper>
  )
}

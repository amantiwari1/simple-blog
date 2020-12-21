import React from "react"
import { Container, FeatureImage, ContentCard, Content } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="12-10-1202"
          title="this tis tesxt awsfdjfl"
          excerpt="this tis tesxt awsfdjfl this tis tesxt awsfdjfl this tis tesxt awsfdjfl"
          slug="/test"
        />
      </Content>
    </Container>
  )
}

export default IndexPage

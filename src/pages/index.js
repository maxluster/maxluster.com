import React from 'react'
import Layout from '../components/layout.js'
import styled from 'styled-components'

const Header = styled.header``

const Content = styled.div``

const TextContainer = styled.div``

const Headline = styled.div``

const Subhead = styled.div``

const SubheadLink = styled.a``

const ImageContainer = styled.a``

const ImageContainerImg = styled.a``

const IndexPage = () => (
  <Layout>
    <Header>
      <Content>
        <TextContainer>
          <Headline>
            Max Luster is a San Francisco based product designer focused on
            solving problems for technical audience
          </Headline>
          <Subhead>
            Currently exploring new opportunities
            <SubheadLink href="#">Get in touch</SubheadLink>.
          </Subhead>
        </TextContainer>
        <ImageContainer>
          <ImageContainerImg src="photo.jpg" />
        </ImageContainer>
      </Content>
    </Header>
  </Layout>
)

export default IndexPage

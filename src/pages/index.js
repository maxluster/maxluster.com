import React from 'react'
import Layout from '../components/layout.js'
import styled from 'styled-components'
import ms from '../styles/modular_scale.js'

const Header = styled.header`
  background: white;
  padding: ${ms(2)}px 0;
`

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const TextContainer = styled.div`
  width: 600px;
  padding-right: 100px;
  margin: auto 0;
`

const Headline = styled.div``

const Subhead = styled.div``

const SubheadLink = styled.a``

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 600px;
  height: 600px;
  background: grey;
`

const ImageContainerImg = styled.img``

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

import React from 'react'
import styled from 'styled-components'
import photo from '../images/photo.jpg'
import space from '../styles/space.js'
import fontSize from '../styles/font_size.js'
import palette from '../styles/palette.js'

const Container = styled.header`
  background: white;
  padding: ${fontSize(3)}rem 0;
`

const Content = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const TextContainer = styled.div`
  width: 42.5%;
  margin: auto 0;
`

const Headline = styled.div`
  font-size: ${fontSize(1)}rem;
  font-weight: 800;
  margin-bottom: 1.618rem;
  color: ${palette.grey};
  line-height: 2.5rem;
`

const Subhead = styled.div`
  font-size: ${fontSize(1)}rem;
  font-weight: 400;
  color: ${palette.grey};
  line-height: 2.5rem;
`

const SubheadLink = styled.a`
  font-size: inherit;
  text-decoration: none;
  color: ${palette.blue};
`

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 50%;
`

const ImageContainerImg = styled.img`
  width: 100%;
  border-radius: 4px;
`

const Header = () => (
  <Container>
    <Content>
      <TextContainer>
        <Headline>
          Max Luster is a San Francisco based product designer focused on
          solving problems for technical audiences
        </Headline>
        <Subhead>
          Currently exploring new opportunities.&nbsp;
          <SubheadLink href="#">Get in touch</SubheadLink>.
        </Subhead>
      </TextContainer>
      <ImageContainer>
        <ImageContainerImg src={photo} />
      </ImageContainer>
    </Content>
  </Container>
)

export default Header

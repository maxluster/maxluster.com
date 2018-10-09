import React from 'react'
import styled from 'styled-components'
import photo from '../images/photo.jpg'
import space from '../styles/space.js'
import fontSize from '../styles/font_size.js'
import palette from '../styles/palette.js'

const Container = styled.header`
  background: white;
  padding: 8rem 0;
`

const Content = styled.div`
  width: 87.5%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const TextContainer = styled.div`
  width: 42.5%;
  margin: auto 0;
`

const Headline = styled.div`
  font-size: ${fontSize(2)}rem;
  font-weight: 800;
  margin-bottom: ${space(9)}rem;
  color: ${palette.grey};
  line-height: 3.8rem;
`

const Subhead = styled.div`
  font-size: ${fontSize(2)}rem;
  font-weight: 400;
  color: ${palette.grey};
  line-height: 3.8rem;
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

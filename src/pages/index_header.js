import React from 'react'
import styled from 'styled-components'
import photo from '../images/photo.jpg'
import space from '../styles/space.js'
import fontSize from '../styles/font_size.js'
import palette from '../styles/palette.js'

const Container = styled.header`
  background: white;
  padding: 4rem 0;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 42fr 3fr;
  justify-items: center;
  @media (min-width: 500px) {
    grid-template-columns: 4fr 40fr 4fr;
  }
  @media (min-width: 700px) {
    margin: 2rem 0;
    justify-items: auto;
    grid-template-columns: 4fr 9fr 3fr 28fr 4fr;
  }
  @media (min-width: 1050px) {
    margin: 0;
    grid-template-columns: 2fr 20fr 2fr 22fr 2fr;
  }
  @media (min-width: 1150px) {
    grid-template-columns: 3fr 18fr 3fr 21fr 3fr;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 4fr 18fr 2fr 20fr 4fr;
  }
`

const TextContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  max-width: 33rem;
  @media (min-width: 700px) {
    grid-column: 4;
    grid-row: auto;
  }
  @media (min-width: 1050px) {
    grid-column: 2;
    align-self: center;
  }
`

const ImageContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
  @media (min-width: 1050px) {
    grid-column: 4;
  }
`
const Image = styled.img`
  width: ${fontSize(5)}rem;
  border-radius: 50%;
  margin-bottom: ${2 * fontSize(1)}rem;
  @media (min-width: 700px) {
    width: 100%;
    margin: 0;
  }
  @media (min-width: 1050px) {
    border-radius: 4px;
  }
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
  transition: opacity 0.1s;
  white-space: nowrap;
  &:hover {
    opacity: 0.6;
  }
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
          <SubheadLink href="#">Get in touch →</SubheadLink>
        </Subhead>
      </TextContainer>
      <ImageContainer>
        <Image src={photo} />
      </ImageContainer>
    </Content>
  </Container>
)

export default Header

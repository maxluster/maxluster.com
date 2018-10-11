import React from 'react'
import styled from 'styled-components'
import space from '../styles/space.js'
import fontSize from '../styles/font_size.js'
import palette from '../styles/palette.js'

// Layout

const Container = styled.footer`
  background: ${palette.darkGrey};
  padding: 2rem 0;
`

const Content = styled.div`
  padding: 0 6.25%;
  @media (min-width: 500px) {
    padding: 0 8.333%;
  }
  @media (min-width: 800px) {
    padding: 0;
    display: grid;
    grid-template-columns: 3fr 18fr 24fr 3fr;
  }
  @media (min-width: 1050px) {
    grid-template-columns: 2fr 22fr 22fr 2fr;
  }
  @media (min-width: 1150px) {
    grid-template-columns: 3fr 21fr 21fr 3fr;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 4fr 20fr 20fr 4fr;
  }
`

const Column = styled.div`
  padding-right: 2rem;
`

const LeftColumns = styled.div`
  grid-column: 2;
  @media (min-width: 1050px) {
    display: grid;
    grid-template-columns: 14fr 8fr;
  }
  @media (min-width: 1150px) {
    grid-template-columns: 14fr 7fr;
  }
  @media (min-width: 1400px) {
    grid-template-columns: 13fr 7fr;
  }
`

const Column1 = styled(Column)``

const Column2 = styled(Column)``

const Column3 = styled(Column)`
  grid-column: 3;
`
const Section = styled.div`
  margin: 2rem 0;
`

// Styles

const Header = styled.h3`
  font-size: 1rem;
  color: ${palette.mediumBlueGrey};
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
  margin: 0 0 0.6rem;
  font-feature-settings: 'smcp', 'c2sc';
  letter-spacing: 0.05rem;
`

const List = styled.ul``

const ListItem = styled.li``

const FooterAnchor = styled.a`
  color: ${palette.lightBlueGrey};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
  padding: 0.6rem 0;
  display: inline-block;
  transition: color 0.1s;
  &:hover {
    color: ${palette.yellow};
  }
`

const Link = ({ href, children }) => (
  <ListItem>
    <FooterAnchor href={href} target="_blank">
      {children}
    </FooterAnchor>
  </ListItem>
)

const Footer = () => (
  <Container>
    <Content>
      <LeftColumns>
        <Column1>
          <Section>
            <Header>Currently</Header>
            <List>
              <Link href="https://getcruise.com">
                Freelance Product Designer, Cruise Automation
              </Link>
            </List>
          </Section>
          <Section>
            <Header>Previously</Header>
            <List>
              <Link href="https://bugsnag.com">VP of Design, Bugsnag</Link>
            </List>
          </Section>
        </Column1>
        <Column2>
          <Section>
            <Header>Elsewhere</Header>
            <List>
              <Link href="https://medium.com/@maxluster">Medium</Link>
              <Link href="https://github.com/maxluster">Github</Link>
              <Link href="https://beta.observablehq.com/@maxluster">
                Observable
              </Link>
              <Link href="https://twitter.com/maxluster">Twitter</Link>
              <Link href="https://soundcloud.com/maaaaaaaaaaax">
                Soundcloud
              </Link>
              <Link href="https://instagram.com/maxluster">Instagram</Link>
            </List>
          </Section>
        </Column2>
      </LeftColumns>
      <Column3>
        <Section>
          <Header>Writing</Header>
          <List>
            <Link href="https://medium.com/@maxluster">
              Multivariate data visualization and the limits of human perception
            </Link>
            <Link href="https://blog.bugsnag.com/chromatic-sass/">
              Advanced Sass color utilities with chromatic-sass
            </Link>
            <Link href="https://blog.bugsnag.com/sass-color-palettes/">
              Managing color palettes with color scales and Sass maps
            </Link>
            <Link href="https://blog.bugsnag.com/responsive-typography-with-chained-media-queries/">
              Responsive typography (3 of 3): Chained media queries
            </Link>
            <Link href="https://blog.bugsnag.com/responsive-typography-with-modular-scale">
              Responsive typography (2 of 3): Proportional type
            </Link>
            <Link href="https://blog.bugsnag.com/responsive-typography-with-rems">
              Responsive typography (1 of 3): Scalable type
            </Link>
            <Link href="https://blog.bugsnag.com/branding-early-stage-startups/">
              Branding for early stage startups
            </Link>
          </List>
        </Section>
        <Section>
          <Header>Open source</Header>
          <List>
            <Link href="https://github.com/bugsnag/chromatic-sass">
              Chromatic Sass
            </Link>
          </List>
        </Section>
      </Column3>
    </Content>
  </Container>
)

export default Footer

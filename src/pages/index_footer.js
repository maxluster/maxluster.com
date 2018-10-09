import React from 'react'
import styled from 'styled-components'
import space from '../styles/space.js'
import fontSize from '../styles/font_size.js'
import palette from '../styles/palette.js'

const Container = styled.footer`
  background: ${palette.darkGrey};
  padding: ${fontSize(3)}rem 0;
`

const Content = styled.div`
  width: 85%;
  display: flex;
  margin: 0 auto;
`

const FooterListHeader = styled.h3`
  font-size: 1rem;
  color: white;
  font-weight: 500;
  margin: 0 0 0.6rem;
  font-feature-settings: 'smcp', 'c2sc';
  letter-spacing: 0.05rem;
`

const FooterList = styled.ul``

const FooterListItem = styled.li``

const FooterAnchor = styled.a`
  color: ${palette.lightBlueGrey};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
  padding: 0.6rem 0;
  display: block;
  transition: color 0.1s;
  &:hover {
    color: ${palette.yellow};
  }
`

const FooterColumn = styled.div`
  flex-shrink: 0;
`

const FooterColumn1 = styled(FooterColumn)`
  width: 30%;
`

const FooterColumn2 = styled(FooterColumn)`
  width: 20%;
  padding-right: 1rem;
`

const FooterColumn3 = styled(FooterColumn)`
  width: 50%;
  padding-right: 1rem;
`

const AdditionalFooterList = styled.div`
  margin-top: 2.2rem;
`

const FooterLink = ({ href, children }) => (
  <FooterListItem>
    <FooterAnchor href={href} target="_blank">
      {children}
    </FooterAnchor>
  </FooterListItem>
)

const Footer = () => (
  <Container>
    <Content>
      <FooterColumn1>
        <FooterListHeader>Currently</FooterListHeader>
        <FooterList>
          <FooterLink href="https://getcruise.com">
            Freelance Product Designer, Cruise Automation
          </FooterLink>
        </FooterList>
        <AdditionalFooterList>
          <FooterListHeader>Previously</FooterListHeader>
          <FooterList>
            <FooterLink href="https://bugsnag.com">
              Head of Design, Bugsnag
            </FooterLink>
          </FooterList>
        </AdditionalFooterList>
      </FooterColumn1>
      <FooterColumn2>
        <FooterListHeader>Elsewhere</FooterListHeader>
        <FooterList>
          <FooterLink href="https://medium.com/@maxluster">Medium</FooterLink>
          <FooterLink href="https://github.com.com/maxluster">
            Github
          </FooterLink>
          <FooterLink href="https://beta.observable.com/maxluster">
            Observable
          </FooterLink>
          <FooterLink href="https://twitter.com/maxluster">Twitter</FooterLink>
          <FooterLink href="https://soundcloud.com/maaaaaaaaaaaaax">
            Soundcloud
          </FooterLink>
          <FooterLink href="https://instagram.com/maxluster">
            Instagram
          </FooterLink>
        </FooterList>
      </FooterColumn2>
      <FooterColumn3>
        <FooterListHeader>Writing</FooterListHeader>
        <FooterList>
          <FooterLink href="https://medium.com/@maxluster">
            Multivariate data visualization and the limits of human perception
          </FooterLink>
          <FooterLink href="https://blog.bugsnag.com/chromatic-sass/">
            Advanced Sass color utilities with chromatic-sass
          </FooterLink>
          <FooterLink href="https://blog.bugsnag.com/sass-color-palettes/">
            Managing color palettes with color scales and Sass maps
          </FooterLink>
          <FooterLink href="https://blog.bugsnag.com/responsive-typography-with-chained-media-queries/">
            Responsive typography (3 of 3): Chained media queries
          </FooterLink>
          <FooterLink href="https://blog.bugsnag.com/responsive-typography-with-modular-scale">
            Responsive typography (2 of 3): Proportional type
          </FooterLink>
          <FooterLink href="https://blog.bugsnag.com/responsive-typography-with-rems">
            Responsive typography (1 of 3): Scalable type
          </FooterLink>
          <FooterLink href="https://blog.bugsnag.com/branding-early-stage-startups/">
            Branding for early stage startups
          </FooterLink>
        </FooterList>
        <AdditionalFooterList>
          <FooterListHeader>Open source</FooterListHeader>
          <FooterList>
            <FooterLink href="https://github.com/bugsnag/chromatic-sass">
              Chromatic Sass
            </FooterLink>
          </FooterList>
        </AdditionalFooterList>
      </FooterColumn3>
    </Content>
  </Container>
)

export default Footer

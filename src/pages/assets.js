import React, { useContext } from "react"
import { useIntl } from "gatsby-plugin-intl"
import { ThemeContext } from "styled-components"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import AssetDownload from "../components/AssetDownload"
// import EthVideo from "../components/EthVideo"
import Link from "../components/Link"
import PageMetadata from "../components/PageMetadata"
import Translation from "../components/Translation"
import { Page, Content } from "../components/SharedStyledComponents"

import { translateMessageId } from "../utils/translations"

// import darkVideo from "../assets/byteco-hero-dark.mp4"
// import lightVideo from "../assets/byteco-hero-light.mp4"

const Image = styled(Img)`
  align-self: center;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 60%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: 100%;
  }
`

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 -1rem 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-wrap: wrap;
  }
`

const H2 = styled.h2`
  margin: 4.5rem 0 1.5rem;
  /* Needed to fix issues of header padding overlapping links */
  /* https://github.com/confluenza/confluenza/pull/17 */
  position: inherit !important;

  /* Prevent nav overlap */
  &:before {
    content: "";
    display: block;
    height: 120px;
    margin-top: -120px;
    visibility: hidden;
  }
`

const H3 = styled.h3`
  margin-bottom: 0;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 2rem;
  }
`

// const EthVideoAsset = styled(EthVideo)`
//   max-height: 400px;
//   max-width: 400px;
// `

const AssetsPage = ({ data }) => {
  const intl = useIntl()
  const themeContext = useContext(ThemeContext)
  const isDarkTheme = themeContext.isDark
  const heroImage = isDarkTheme ? data.heroImageDark : data.heroImage
  return (
    <Page>
      <PageMetadata
        title={translateMessageId("page-assets-meta-title", intl)}
        description={translateMessageId("page-assets-meta-desc", intl)}
      />
      <Content>
        <HeroContainer>
          <Header>
            <Image
              fixed={heroImage.childImageSharp.fixed}
              alt={translateMessageId("page-assets-bto-diamond-gray", intl)}
            />
            <h1>
              <Translation id="page-assets-h1" />
            </h1>
            <Link to="/assets/#illustrations">
              <Translation id="page-assets-illustrations" />
            </Link>
            <Link to="/assets/#historical">
              <Translation id="page-assets-historical-artwork" />
            </Link>
            <Link to="/assets/#brand">
              <Translation id="page-assets-byteco-brand-assets" />
            </Link>
          </Header>
        </HeroContainer>
        <H2 id="illustrations">
          <Translation id="page-assets-illustrations" />
        </H2>

        <Row>
          <AssetDownload
            title={translateMessageId("page-assets-hero", intl)}
            alt={translateMessageId("page-assets-hero", intl)}
            image={data.hero.childImageSharp}
            artistName="Liam Cobb"
            artistUrl="https://liamcobb.com/"
          />
        </Row>

        <Row>
          <AssetDownload
            title={translateMessageId("page-assets-doge", intl)}
            alt={translateMessageId("page-assets-doge", intl)}
            image={data.doge.childImageSharp}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
          <AssetDownload
            title={translateMessageId("page-assets-blocks", intl)}
            alt={translateMessageId("page-assets-blocks", intl)}
            image={data.developers.childImageSharp}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
          <AssetDownload
            title={translateMessageId("page-assets-enterprise", intl)}
            alt={translateMessageId("page-assets-enterprise", intl)}
            image={data.enterprise.childImageSharp}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
        </Row>

        <Row>
          <AssetDownload
            title={translateMessageId("page-assets-robot", intl)}
            alt={translateMessageId("page-assets-robot", intl)}
            image={data.wallet.childImageSharp}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
          />
          <AssetDownload
            title={translateMessageId("page-assets-robot", intl)}
            alt={translateMessageId("page-assets-robot", intl)}
            image={data.wallet.childImageSharp}
            artistName="William Tempest"
            artistUrl="https://cargocollective.com/willtempest"
            shouldHide={true}
          />
        </Row>

        <Row>
          <AssetDownload
            title={translateMessageId("page-assets-bazaar", intl)}
            alt={translateMessageId("page-assets-bazaar", intl)}
            image={data.whatIsByteco.childImageSharp}
            artistName="Viktor Hachmang"
            artistUrl="http://viktorhachmang.nl/"
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto", intl)}
            alt={translateMessageId("page-assets-bto", intl)}
            image={data.bto.childImageSharp}
            artistName="Viktor Hachmang"
            artistUrl="http://viktorhachmang.nl/"
          />
        </Row>

        <H2 id="historical">
          <Translation id="page-assets-historical-artwork" />
        </H2>

        {/* TODO re-add: https://www.notion.so/efdn/Buy-contract-NFT-art-for-the-website-a589591ee18a4e5b8aeafe13075a62dc */}
        {/* <Row>
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-glyph-video-light",
              intl
            )}
            artistName="Lili Lashka"
            artistUrl="https://www.impermanence.co/"
            src={lightVideo}
          >
            <EthVideoAsset
              videoSrc={lightVideo}
              alt={translateMessageId(
                "page-assets-bto-glyph-video-light",
                intl
              )}
            />
          </AssetDownload>
          <AssetDownload
            title={translateMessageId("page-assets-bto-glyph-video-dark", intl)}
            artistName="Lili Lashka"
            artistUrl="https://www.impermanence.co/"
            src={darkVideo}
          >
            <EthVideoAsset
              videoSrc={darkVideo}
              alt={translateMessageId("page-assets-bto-glyph-video-dark", intl)}
            />
          </AssetDownload>
        </Row>
        <Row>
          <AssetDownload
            title="BTO gif (1)"
            image={data.ethGifCat.childImageSharp}
          />
          <AssetDownload
            title="BTO gif (2)"
            image={data.ethGifChalk.childImageSharp}
          />
          <AssetDownload
            title="BTO gif (3)"
            image={data.ethGifSun.childImageSharp}
          />
          <AssetDownload
            title="BTO gif (4)"
            image={data.ethGifWaves.childImageSharp}
          />
        </Row> */}

        <Row>
          {/* TODO artistUrl */}
          <AssetDownload
            title={translateMessageId("page-assets-hero-particles", intl)}
            alt={translateMessageId("page-assets-hero-particles", intl)}
            image={data.oldHero.childImageSharp}
            artistName="EthWorks & Alan Wu"
            artistUrl=""
          />
          <AssetDownload
            title={translateMessageId("page-assets-hero-particles", intl)}
            alt={translateMessageId("page-assets-hero-particles", intl)}
            image={data.oldHeroDark.childImageSharp}
            artistName="EthWorks & Alan Wu"
            artistUrl=""
          />
        </Row>

        <H2 id="brand">
          <Translation id="page-assets-byteco-brand-assets" />
        </H2>

        <H3>
          <Translation id="page-assets-page-assets-transparent-background" />
        </H3>

        <Row>
          <AssetDownload
            title={translateMessageId("page-assets-bto-diamond-glyph", intl)}
            alt={translateMessageId("page-assets-bto-diamond-glyph", intl)}
            image={data.ethDiamondGlyph.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-diamond-gray", intl)}
            alt={translateMessageId("page-assets-bto-diamond-gray", intl)}
            image={data.ethDiamondBlack.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-diamond-color", intl)}
            alt={translateMessageId("page-assets-bto-diamond-color", intl)}
            image={data.ethDiamondColor.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-diamond-purple", intl)}
            alt={translateMessageId("page-assets-bto-diamond-purple", intl)}
            image={data.ethDiamondPurple.childImageSharp}
          />
        </Row>
        <Row>
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-portrait-gray",
              intl
            )}
            alt={translateMessageId("page-assets-bto-logo-portrait-gray", intl)}
            image={data.ethPortraitBlack.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-landscape-gray",
              intl
            )}
            alt={translateMessageId(
              "page-assets-bto-logo-landscape-gray",
              intl
            )}
            image={data.ethLandscapeBlack.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-wordmark-gray", intl)}
            alt={translateMessageId("page-assets-bto-wordmark-gray", intl)}
            image={data.ethWordmarkBlack.childImageSharp}
          />
        </Row>
        <Row>
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-portrait-purple",
              intl
            )}
            alt={translateMessageId(
              "page-assets-bto-logo-portrait-purple",
              intl
            )}
            image={data.ethPortraitPurple.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-landscape-purple",
              intl
            )}
            alt={translateMessageId(
              "page-assets-bto-logo-landscape-purple",
              intl
            )}
            image={data.ethLandscapePurple.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-wordmark-purple", intl)}
            alt={translateMessageId("page-assets-bto-wordmark-purple", intl)}
            image={data.ethWordmarkPurple.childImageSharp}
          />
        </Row>

        <H3>
          <Translation id="page-assets-page-assets-solid-background" />
        </H3>

        <Row>
          <AssetDownload
            title={translateMessageId("page-assets-bto-diamond-white", intl)}
            alt={translateMessageId("page-assets-bto-diamond-white", intl)}
            image={data.ethDiamondBlackWhite.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-diamond-gray", intl)}
            alt={translateMessageId("page-assets-bto-diamond-gray", intl)}
            image={data.ethDiamondBlackGray.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-diamond-purple", intl)}
            alt={translateMessageId("page-assets-bto-diamond-purple", intl)}
            image={data.ethDiamondPurplePurple.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-diamond-white", intl)}
            alt={translateMessageId("page-assets-bto-diamond-white", intl)}
            image={data.ethDiamondPurpleWhite.childImageSharp}
          />
        </Row>
        <Row>
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-portrait-gray",
              intl
            )}
            alt={translateMessageId("page-assets-bto-logo-portrait-gray", intl)}
            image={data.ethPortraitBlackGray.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-landscape-gray",
              intl
            )}
            alt={translateMessageId(
              "page-assets-bto-logo-landscape-gray",
              intl
            )}
            image={data.ethLandscapeBlackGray.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-wordmark-gray", intl)}
            alt={translateMessageId("page-assets-bto-wordmark-gray", intl)}
            image={data.ethWordmarkBlackGray.childImageSharp}
          />
        </Row>
        <Row>
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-portrait-purple",
              intl
            )}
            alt={translateMessageId(
              "page-assets-bto-logo-portrait-purple",
              intl
            )}
            image={data.ethPortraitPurplePurple.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-landscape-purple",
              intl
            )}
            alt={translateMessageId(
              "page-assets-bto-logo-landscape-purple",
              intl
            )}
            image={data.ethLandscapePurplePurple.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-wordmark-purple", intl)}
            alt={translateMessageId("page-assets-bto-wordmark-purple", intl)}
            image={data.ethWordmarkPurplePurple.childImageSharp}
          />
        </Row>
        <Row>
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-portrait-white",
              intl
            )}
            alt={translateMessageId(
              "page-assets-bto-logo-portrait-white",
              intl
            )}
            image={data.ethPortraitPurpleWhite.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId(
              "page-assets-bto-logo-landscape-white",
              intl
            )}
            alt={translateMessageId(
              "page-assets-bto-logo-landscape-white",
              intl
            )}
            image={data.ethLandscapePurpleWhite.childImageSharp}
          />
          <AssetDownload
            title={translateMessageId("page-assets-bto-wordmark-white", intl)}
            alt={translateMessageId("page-assets-bto-wordmark-white", intl)}
            image={data.ethWordmarkPurpleWhite.childImageSharp}
          />
        </Row>
      </Content>
    </Page>
  )
}

export default AssetsPage

export const heroImage = graphql`
  fragment heroImage on File {
    childImageSharp {
      fluid(maxWidth: 1440) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const assetItem = graphql`
  fragment assetItem on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "assets/bto-diamond-black.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    heroImageDark: file(relativePath: { eq: "assets/bto-diamond-purple.png" }) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hero: file(relativePath: { eq: "home/hero.png" }) {
      ...heroImage
    }
    developers: file(relativePath: { eq: "developers-bto-blocks.png" }) {
      ...assetItem
    }
    doge: file(relativePath: { eq: "doge-computer.png" }) {
      ...assetItem
    }
    enterprise: file(relativePath: { eq: "enterprise-bto.png" }) {
      ...assetItem
    }
    wallet: file(relativePath: { eq: "wallet.png" }) {
      ...assetItem
    }
    bto: file(relativePath: { eq: "bto.png" }) {
      ...assetItem
    }
    whatIsByteco: file(relativePath: { eq: "what-is-byteco.png" }) {
      ...assetItem
    }
    ethGifCat: file(relativePath: { eq: "bto-gif-cat.png" }) {
      ...assetItem
    }
    ethGifChalk: file(relativePath: { eq: "bto-gif-chalk.png" }) {
      ...assetItem
    }
    ethGifSun: file(relativePath: { eq: "bto-gif-sun.png" }) {
      ...assetItem
    }
    ethGifWaves: file(relativePath: { eq: "bto-gif-waves.png" }) {
      ...assetItem
    }
    oldHero: file(relativePath: { eq: "assets/hero.png" }) {
      ...heroImage
    }
    oldHeroDark: file(relativePath: { eq: "assets/hero-dark.png" }) {
      ...heroImage
    }
    efLogo: file(relativePath: { eq: "ef-logo.png" }) {
      ...assetItem
    }
    efLogoWhite: file(relativePath: { eq: "ef-logo-white.png" }) {
      ...assetItem
    }
    ethDiamondGlyph: file(
      relativePath: { eq: "assets/bto-diamond-glyph.png" }
    ) {
      ...assetItem
    }
    ethDiamondColor: file(
      relativePath: { eq: "assets/bto-diamond-rainbow.png" }
    ) {
      ...assetItem
    }
    ethDiamondPurple: file(
      relativePath: { eq: "assets/bto-diamond-purple.png" }
    ) {
      ...assetItem
    }
    ethDiamondPurplePurple: file(
      relativePath: { eq: "assets/bto-diamond-purple-purple.png" }
    ) {
      ...assetItem
    }
    ethDiamondBlackGray: file(
      relativePath: { eq: "assets/bto-diamond-black-gray.png" }
    ) {
      ...assetItem
    }
    ethDiamondBlackWhite: file(
      relativePath: { eq: "assets/bto-diamond-black-white.jpg" }
    ) {
      ...assetItem
    }
    ethDiamondPurpleWhite: file(
      relativePath: { eq: "assets/bto-diamond-purple-white.jpg" }
    ) {
      ...assetItem
    }
    ethPortraitBlackGray: file(
      relativePath: { eq: "assets/bto-logo-portrait-black-gray.png" }
    ) {
      ...assetItem
    }
    ethLandscapeBlackGray: file(
      relativePath: { eq: "assets/bto-logo-landscape-black-gray.png" }
    ) {
      ...assetItem
    }
    ethWordmarkBlackGray: file(
      relativePath: { eq: "assets/bto-wordmark-black-gray.png" }
    ) {
      ...assetItem
    }
    ethDiamondBlack: file(
      relativePath: { eq: "assets/bto-diamond-black.png" }
    ) {
      ...assetItem
    }
    ethPortraitBlack: file(
      relativePath: { eq: "assets/bto-logo-portrait-black.png" }
    ) {
      ...assetItem
    }
    ethLandscapeBlack: file(
      relativePath: { eq: "assets/bto-logo-landscape-black.png" }
    ) {
      ...assetItem
    }
    ethWordmarkBlack: file(
      relativePath: { eq: "assets/bto-wordmark-black.png" }
    ) {
      ...assetItem
    }
    ethPortraitPurple: file(
      relativePath: { eq: "assets/bto-logo-portrait-purple.png" }
    ) {
      ...assetItem
    }
    ethLandscapePurple: file(
      relativePath: { eq: "assets/bto-logo-landscape-purple.png" }
    ) {
      ...assetItem
    }
    ethWordmarkPurple: file(
      relativePath: { eq: "assets/bto-wordmark-purple.png" }
    ) {
      ...assetItem
    }
    ethPortraitPurplePurple: file(
      relativePath: { eq: "assets/bto-logo-portrait-purple-purple.png" }
    ) {
      ...assetItem
    }
    ethLandscapePurplePurple: file(
      relativePath: { eq: "assets/bto-logo-landscape-purple-purple.png" }
    ) {
      ...assetItem
    }
    ethWordmarkPurplePurple: file(
      relativePath: { eq: "assets/bto-wordmark-purple-purple.png" }
    ) {
      ...assetItem
    }
    ethPortraitPurpleWhite: file(
      relativePath: { eq: "assets/bto-logo-portrait-purple-white.png" }
    ) {
      ...assetItem
    }
    ethLandscapePurpleWhite: file(
      relativePath: { eq: "assets/bto-logo-landscape-purple-white.png" }
    ) {
      ...assetItem
    }
    ethWordmarkPurpleWhite: file(
      relativePath: { eq: "assets/bto-wordmark-purple-white.png" }
    ) {
      ...assetItem
    }
  }
`

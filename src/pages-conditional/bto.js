import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"

import { translateMessageId } from "../utils/translations"
import Translation from "../components/Translation"
import ActionCard from "../components/ActionCard"
import ButtonLink from "../components/ButtonLink"
import CalloutBanner from "../components/CalloutBanner"
import CardList from "../components/CardList"
import EthPriceCard from "../components/EthPriceCard"
import EthVideo from "../components/EthVideo"
import InfoBanner from "../components/InfoBanner"
import Link from "../components/Link"
import HorizontalCard from "../components/HorizontalCard"
import PageMetadata from "../components/PageMetadata"
import {
  CardContainer,
  Content,
  Divider,
  GrayContainer,
  Intro,
  LeftColumn,
  RightColumn,
  TwoColumnContent,
  Page,
  StyledCard,
} from "../components/SharedStyledComponents"

const Slogan = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 140%;
`

const Title = styled.h1`
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-top: 0;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textTableOfContents};
`

const StyledTwoColumnContent = styled(TwoColumnContent)`
  align-items: flex-start;
`

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
`
const SubtitleTwo = styled.div`
  font-size: 20px;
  line-height: 140%;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text300};
`

const StyledEthPriceCard = styled(EthPriceCard)`
  margin-bottom: 2rem;
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
`

const Hero = styled(Img)`
  flex: 1 1 100%;
  max-width: 800px;
  align-self: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-left: 0;
    width: 100%;
  }
`

const Header = styled.header`
  flex: 1 1 50%;
  min-width: 300px;
  margin-top: 8rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 1.5rem;
  }
`

const H2 = styled.h2`
  margin-top: 0;
`

const H4 = styled.h4`
  font-weight: 600;
`

const StyledCardContainer = styled(CardContainer)`
  margin-bottom: 2rem;
`

const TokenCard = styled(HorizontalCard)`
  min-width: 100%;
  margin: 0.5rem 0rem;
  border-radius: 0px;
`

const TextDivider = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 10%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.searchResultBackground};
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    align-self: flex-start;
  }
`

const CentralColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 960px;
  margin: 4rem auto;
`

const CentralActionCard = styled(ActionCard)`
  flex: none;
  margin: 2rem 0;
  .action-card-image-wrapper {
    padding: 1rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.s}) {
    display: flex;

    .action-card-image-wrapper {
      min-width: 260px;
    }
    .action-card-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 1rem;

      p {
        margin-bottom: 0;
      }
    }
  }
`

const StyledCalloutBanner = styled(CalloutBanner)`
  margin: 5rem 0;
`

const tokens = [
  {
    emoji: ":scales:",
    title: <Translation id="page-bto-stablecoins" />,
    description: <Translation id="page-bto-stablecoins-desc" />,
  },
  {
    emoji: ":ballot_box_with_ballot:",
    title: <Translation id="page-bto-gov-tokens" />,
    description: <Translation id="page-bto-gov-tokens-desc" />,
  },
  {
    emoji: ":pile_of_poo:",
    title: <Translation id="page-bto-shit-coins" />,
    description: <Translation id="page-bto-shit-coins-desc" />,
  },
  {
    emoji: ":frame_with_picture:",
    title: <Translation id="page-bto-collectible-tokens" />,
    description: <Translation id="page-bto-collectible-tokens-desc" />,
  },
]

const benefits = [
  {
    emoji: ":woman_technologist:",
    title: <Translation id="page-bto-yours" />,
    description: <Translation id="page-bto-yours-desc" />,
  },
  {
    emoji: ":shield:",
    title: <Translation id="page-bto-cryptography" />,
    description: <Translation id="page-bto-cryptography-desc" />,
  },
  {
    emoji: ":handshake:",
    title: <Translation id="page-bto-p2p-payments" />,
    description: <Translation id="page-bto-p2p-payments-desc" />,
  },
  {
    emoji: ":money_with_wings:",
    title: <Translation id="page-bto-no-centralized" />,
    description: <Translation id="page-bto-no-centralized-desc" />,
  },
  {
    emoji: ":signal_strength:",
    title: <Translation id="page-bto-open" />,
    description: <Translation id="page-bto-open-desc" />,
  },
  {
    emoji: ":shortcake:",
    title: <Translation id="page-bto-flexible-amounts" />,
    description: <Translation id="page-bto-flexible-amounts-desc" />,
  },
]

const tokenLinks = [
  {
    caption: "",
    title: <Translation id="page-bto-tokens-stablecoins" />,
    description: <Translation id="page-bto-tokens-stablecoins-description" />,
  },
  {
    caption: "",
    title: <Translation id="page-bto-tokens-defi" />,
    description: <Translation id="page-bto-tokens-defi-description" />,
  },
  {
    caption: "",
    title: <Translation id="page-bto-tokens-nft" />,
    description: <Translation id="page-bto-tokens-nft-description" />,
  },
  {
    caption: "",
    title: <Translation id="page-bto-tokens-dao" />,
    description: <Translation id="page-bto-tokens-dao-description" />,
  },
]

const cardListContent = [

  {
    link:
      "https://support.mycrypto.com/how-to/getting-started/how-to-buy-byte-with-usd",
    title: <Translation id="page-bto-how-to-buy" />,
    description: "MyCrypto",
    caption: <Translation id="page-bto-how-to-buy-caption" />,
  },
]

const WhatIsBytecoPage = (props) => {
  const intl = useIntl()
  const data = props.data
  return (
    <Page>
      <PageMetadata
        title={translateMessageId("page-bto-whats-bto-meta-title", intl)}
        description={translateMessageId("page-bto-whats-bto-meta-desc", intl)}
        image={data.ogImage.childImageSharp.fixed.src}
      />
      <Content>
        <HeroContainer>
          <Header>
            <Title>
              <Translation id="page-bto-whats-bto" />
            </Title>
            <Slogan>
              <Translation id="page-bto-currency-for-future" />
            </Slogan>
            <Subtitle>
              <Translation id="page-bto-is-money" />
            </Subtitle>
            <SubtitleTwo>
              <Translation id="page-bto-currency-for-apps" />
            </SubtitleTwo>
            <StyledEthPriceCard />
            <ButtonLink to="/get-bto/" title="where to buy bto">
              <Translation id="page-bto-button-buy-bto" />
            </ButtonLink>
          </Header>
          <Hero
            fluid={data.bto.childImageSharp.fluid}
            alt={translateMessageId("page-bto-whats-bto-hero-alt", intl)}
            loading="eager"
          />
        </HeroContainer>
      </Content>
      <GrayContainer>
        <Content>
          <Intro>
            <p>
              <Translation id="page-bto-description" />{" "}
            </p>
          </Intro>
          <StyledCardContainer>
            {benefits.map((benefits, idx) => (
              <StyledCard
                key={idx}
                emoji={benefits.emoji}
                title={benefits.title}
                description={benefits.description}
              />
            ))}
          </StyledCardContainer>
          <InfoBanner emoji=":wave:" shouldCenter={true}>
            <b>
              <Translation id="page-bto-buy-some" />
            </b>{" "}
            <Translation id="page-bto-buy-some-desc" />{" "}
            <Link to="/what-is-byteco/">
              <Translation id="page-bto-more-on-byteco-link" />
            </Link>
            <Translation id="page-bto-period" />
          </InfoBanner>
        </Content>
      </GrayContainer>
      <Content>
        <CentralColumn>
          <H2>
            <Translation id="page-bto-whats-unique" />
          </H2>
          <p>
            <Translation id="page-bto-whats-unique-desc" />
          </p>
          <EthVideo alt={translateMessageId("page-bto-video-alt", intl)} />
          <div>
            <H4>
              <Translation id="page-bto-fuels" />
            </H4>
            <p>
              <Translation id="page-bto-fuels-desc" />
            </p>
            <p>
              <Translation id="page-bto-fuels-desc-2" />
            </p>
            <p>
              <Translation id="page-bto-fuels-desc-3" />{" "}
              <strong>
                <Translation id="page-bto-powers-byteco" />
              </strong>
              .{" "}
              <Link to="/developers/docs/consensus-mechanisms/pow/mining/">
                <Translation id="page-bto-mining-link" />
              </Link>
            </p>
            <p>
              <Translation id="page-bto-fuels-staking" />{" "}
              <Link to="/open/staking/">
                <Translation id="page-bto-fuels-more-staking" />
              </Link>
            </p>
          </div>
          <CentralActionCard
            to="/what-is-byteco/"
            title={translateMessageId("page-bto-whats-byteco", intl)}
            description={translateMessageId(
              "page-bto-whats-byteco-desc",
              intl
            )}
            image={data.byteco.childImageSharp.fixed}
          />
          <TextDivider />
          <div>
            <H4>
              <Translation id="page-bto-underpins" />
            </H4>
            <p>
              <Translation id="page-bto-underpins-desc" />
            </p>
            <p>
              <Translation id="page-bto-underpins-desc-2" />
            </p>
            <CentralActionCard
              to="/defi/"
              title={translateMessageId("page-bto-whats-defi", intl)}
              description={translateMessageId(
                "page-bto-whats-defi-description",
                intl
              )}
              image={data.defi.childImageSharp.fixed}
            />
          </div>
          <TextDivider />
          <div>
            <H4>
              <Translation id="page-bto-uses" />
            </H4>
            <p>
              <Translation id="page-bto-uses-desc" />
            </p>
            <p>
              <Translation id="page-bto-uses-desc-2" />{" "}
            </p>
            <ul>
              <li>
                <Link to="https://sablier.finance">
                  <Translation id="page-bto-stream-link" />
                </Link>{" "}
                – <Translation id="page-bto-uses-desc-3" />
              </li>
              <li>
                <Link to="/get-bto/#dex">
                  <Translation id="page-bto-trade-link-2" />
                </Link>{" "}
                – <Translation id="page-bto-uses-desc-4" />
              </li>
              <li>
                <Link to="https://app.compound.finance/">
                  <Translation id="page-bto-earn-interest-link" />
                </Link>{" "}
                – <Translation id="page-bto-uses-desc-5" />
              </li>
              <li>
                <Link to="/stablecoins/">
                  <Translation id="page-bto-stablecoins-link" />
                </Link>{" "}
                – <Translation id="page-bto-uses-desc-6" />
              </li>
            </ul>
          </div>
          <Divider />
        </CentralColumn>
        <StyledCalloutBanner
          title={translateMessageId("page-bto-where-to-buy", intl)}
          description={translateMessageId("page-bto-where-to-buy-desc", intl)}
          image={data.ethCat.childImageSharp.fluid}
          alt={translateMessageId("page-bto-cat-img-alt", intl)}
          maxImageWidth={300}
        >
          <div>
            <ButtonLink to="/get-bto/">
              <Translation id="page-bto-get-bto-btn" />
            </ButtonLink>
          </div>
        </StyledCalloutBanner>
      </Content>

      <TwoColumnContent>
        <LeftColumn>
          <h3>
            <Translation id="page-bto-has-value" />
          </h3>
          <p>
            <Translation id="page-bto-has-value-desc" />
          </p>
          <p>
            <Translation id="page-bto-has-value-desc-2" />
          </p>
          <p>
            <Translation id="page-bto-has-value-desc-3" />
          </p>
          <p>
            <Translation id="page-bto-has-value-desc-4" />
          </p>
          <p>
            <Translation id="page-bto-has-value-desc-5" />
          </p>
        </LeftColumn>
        <RightColumn>
          <CardList content={cardListContent} />
        </RightColumn>
      </TwoColumnContent>
      <StyledTwoColumnContent id="tokens">
        <LeftColumn>
          <h3>
            <Translation id="page-bto-not-only-crypto" />
          </h3>
          <p>
            <Translation id="page-bto-not-only-crypto-desc" />{" "}
          </p>
          <p>
            <Translation id="page-bto-not-only-crypto-desc-2" />
          </p>
          <h4>
            <Translation id="page-bto-more-on-tokens" />
          </h4>
          <CardList id="tokens" content={tokenLinks} />
        </LeftColumn>
        <RightColumn>
          <h3>
            <Translation id="page-bto-popular-tokens" />
          </h3>
          {tokens.map((token, idx) => (
            <TokenCard
              key={idx}
              emoji={token.emoji}
              title={token.title}
              description={token.description}
              size={5}
            />
          ))}
        </RightColumn>
      </StyledTwoColumnContent>
    </Page>
  )
}

export default WhatIsBytecoPage

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "home/bto-tokens.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dapps: file(relativePath: { eq: "doge-computer.png" }) {
      childImageSharp {
        fixed(width: 372) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bto: file(relativePath: { eq: "bto.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ogImage: file(relativePath: { eq: "bto.png" }) {
      childImageSharp {
        fixed(width: 1200) {
          src
        }
      }
    }
    byteco: file(relativePath: { eq: "what-is-byteco.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    defi: file(relativePath: { eq: "finance_transparent.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ethCat: file(relativePath: { eq: "bto-gif-cat.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

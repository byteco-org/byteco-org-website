import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import styled from "styled-components"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { translateMessageId } from "../../../utils/translations"
import Card from "../../../components/Card"
import Leaderboard from "../../../components/Leaderboard"
import CalloutBanner from "../../../components/CalloutBanner"
import Emoji from "../../../components/Emoji"
import ProductCard from "../../../components/ProductCard"
import ButtonLink from "../../../components/ButtonLink"
import PageMetadata from "../../../components/PageMetadata"
import CardList from "../../../components/CardList"
import Translation from "../../../components/Translation"

import {
  CardContainer,
  CardGrid,
  Content,
  Page,
  GrayContainer,
  Divider,
  SloganGradient,
} from "../../../components/SharedStyledComponents"
import Breadcrumbs from "../../../components/Breadcrumbs"

const HeroContainer = styled.div`
  padding-left: 0rem;
  padding-top: 8rem;
  padding-bottom: 8rem;
  width: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding-top: 2rem;
    padding-left: 0rem;
    width: 100%;
  }
`

const StyledCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }
`

const LeaderboardContainer = styled.div`
  padding-left: 0rem;
  padding-top: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 100%;
    margin-top: 2rem;
  }
`

const HeroCard = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: -2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 1rem;
  }
`

const Subtitle = styled.div`
  font-size: 24px;
  line-height: 140%;
  color: ${(props) => props.theme.colors.text200};
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`

const ReverseRow = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: column-reverse;
  }
`

const Status = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`

const StyledCardContainer = styled(CardContainer)`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

const StyledCardGrid = styled(CardGrid)`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
`

const On = styled.div`
  width: 8px;
  height: 8px;
  background: ${(props) => props.theme.colors.success400};
  border-radius: 64px;
`

const StyledCardList = styled(CardList)`
  margin-right: 2rem;
`

const Title = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0rem;
  margin-left: 0.5rem;
`

const Staking = styled.div`
  padding: 4rem;
  background: ${(props) => props.theme.colors.cardGradient};
  width: 100%;
  margin-top: 2rem;
  margin-bottom: -2rem;
  display: flex;
  flex-direction: column;
`

const LeftColumn = styled.div`
  width: 50%;
  margin-right: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 100%;
    margin-left: 4rem;
  }
`

const RightColumn = styled.div`
  width: 50%;
  margin-left: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 100%;
    margin-right: 4rem;
    margin-bottom: -2rem;
  }
`

const StyledBreadcrumbs = styled(Breadcrumbs)`
  justify-content: center;
`

const StyledGrayContainer = styled(GrayContainer)`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const StyledCalloutBanner = styled(CalloutBanner)`
  background: transparent;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 100%;
    padding: 0rem;
    padding-top: 4rem;
    margin-left: 0rem;
  }
`

const TemporaryCallout = styled(CalloutBanner)`
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
`

const GetInvolvedPage = ({ data, location }) => {
  const intl = useIntl()
  const themeContext = useContext(ThemeContext)
  const isDarkTheme = themeContext.isDark

  // TODO sort query isn't working :(
  const bountyHunters = data.bountyHunters.nodes.sort(
    (a, b) => b.score - a.score
  )
  const clients = [
    {
      name: "Prysm",
      background: "#23292E",
      description: <Translation id="page-open-get-involved-written-go" />,
      alt: "open-client-prysm-logo-alt",
      url: "https://prylabs.net/",
      image: data.prysm.childImageSharp.fixed,
      gitHubRepo: data.prysmGitHub.repository,
    },
    {
      name: "Lighthouse",
      background: "",
      description: <Translation id="page-open-get-involved-written-rust" />,
      alt: "open-client-lighthouse-logo-alt",
      url: "https://lighthouse-book.sigmaprime.io/",
      image: isDarkTheme
        ? data.lighthouseDark.childImageSharp.fixed
        : data.lighthouseLight.childImageSharp.fixed,
      gitHubRepo: data.lighthouseGitHub.repository,
    },
    {
      name: "Teku",
      background: "#3359D5",
      description: <Translation id="page-open-get-involved-written-java" />,
      alt: "open-client-teku-logo-alt",
      url: "https://pegasys.tech/teku",
      image: isDarkTheme
        ? data.tekuLight.childImageSharp.fixed
        : data.tekuDark.childImageSharp.fixed,
      gitHubRepo: data.tekuGitHub.repository,
    },
    {
      name: "Cortex",
      background: "#4CAEE5",
      description: <Translation id="page-open-get-involved-written-net" />,
      alt: "open-client-cortex-logo-alt",
      url: "https://nethermind.io/",
      image: data.cortex.childImageSharp.fixed,
      gitHubRepo: data.cortexGitHub.repository,
    },
    {
      name: "Lodestar",
      background: "#14140B",
      description: (
        <Translation id="page-open-get-involved-written-javascript" />
      ),
      alt: "open-client-lodestar-logo-alt",
      url: "https://chainsafe.io/",
      image: data.lodestar.childImageSharp.fixed,
      gitHubRepo: data.lodestarGitHub.repository,
    },
    {
      name: "Nimbus",
      background: "#DC8600",
      description: <Translation id="page-open-get-involved-written-nim" />,
      alt: "open-client-nimbus-logo-alt",
      url: "https://nimbus.team/",
      image: data.nimbus.childImageSharp.fixed,
      gitAccount: "status-im",
      gitRepo: "nimbus-eth1",
      gitHubRepo: data.nimbusGitHub.repository,
    },
    {
      name: "Trinity",
      background: "#0B131E",
      description: <Translation id="page-open-get-involved-written-python" />,
      alt: "open-client-trinity-logo-alt",
      url: "https://trinity.byteco.org/",
      image: data.trinity.childImageSharp.fixed,
      gitHubRepo: data.trinityGitHub.repository,
    },
  ]

  const ethresearch = [
    {
      title: <Translation id="page-open-get-involved-ethresearch-1" />,
      description: "",
      link: "https://ethresear.ch/c/sharding/6",
    },
    {
      title: <Translation id="page-open-get-involved-ethresearch-2" />,
      description: "",
      link: "https://ethresear.ch/c/eth1-to-open-transition/38",
    },
    {
      title: <Translation id="page-open-get-involved-ethresearch-3" />,
      description: "",
      link: "https://ethresear.ch/c/open-phase-2/35",
    },
    {
      title: <Translation id="page-open-get-involved-ethresearch-4" />,
      description: "",
      link: "https://ethresear.ch/",
    },
  ]

  const paths = [
    {
      emoji: ":computer:",
      title: <Translation id="page-open-get-involved-title-1" />,
      description: <Translation id="page-open-get-involved-desc-1" />,
      url: "#clients",
      button: <Translation id="page-open-get-involved-btn-1" />,
    },
    {
      emoji: ":moneybag:",
      title: <Translation id="page-open-get-involved-title-2" />,
      description: <Translation id="page-open-get-involved-desc-2" />,
      url: "/open/staking/",
      button: <Translation id="page-open-get-involved-btn-2" />,
    },
    {
      emoji: ":bug:",
      title: <Translation id="page-open-get-involved-title-3" />,
      description: <Translation id="page-open-get-involved-desc-3" />,
      url: "/open/get-involved/bug-bounty/",
      button: <Translation id="page-open-get-involved-btn-3" />,
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("page-open-get-involved", intl)}
        description={translateMessageId(
          "page-open-get-involved-meta-description",
          intl
        )}
      />
      <Content>
        <HeroCard>
          <HeroContainer>
            <StyledBreadcrumbs slug={location.pathname} startDepth={1} />
            <SloganGradient>
              <Translation id="page-open-get-involved" />{" "}
              <Emoji size={1} text=":wave:" />
            </SloganGradient>
            <Subtitle>
              <Translation id="page-open-get-involved-subtitle" />
            </Subtitle>
          </HeroContainer>
        </HeroCard>
        <H2>
          <Translation id="page-open-get-involved-how" />
        </H2>
        <p>
          <Translation id="page-open-get-involved-how-desc" />
        </p>
        <StyledCardContainer>
          {paths.map((path, idx) => (
            <StyledCard
              key={idx}
              emoji={path.emoji}
              title={path.title}
              description={path.description}
            >
              <ButtonLink to={path.url}>{path.button}</ButtonLink>
            </StyledCard>
          ))}
        </StyledCardContainer>
        <TemporaryCallout
          image={data.rhino.childImageSharp.fluid}
          alt={translateMessageId("open-rhino-img-alt", intl)}
          title={translateMessageId("page-open-get-involved-grants", intl)}
          description={translateMessageId(
            "page-open-get-involved-grants-desc",
            intl
          )}
        >
          <div>
            <ButtonLink to="/open/get-involved/staking-community-grants/">
              <Translation id="page-open-get-involved-more" />
            </ButtonLink>
          </div>
          <Status>
            <On />
            <Title>
              <Translation id="page-open-get-involved-date" />
            </Title>
          </Status>
        </TemporaryCallout>
      </Content>
      <Divider id="clients" />
      <Content>
        <H2>
          <Translation id="page-open-get-involved-run-clients" />
        </H2>
        <p>
          <Translation id="page-open-get-involved-run-clients-desc" />
        </p>
        <StyledCardGrid>
          {clients.map((client, idx) => (
            <ProductCard
              key={idx}
              url={client.url}
              background={client.background}
              image={client.image}
              name={client.name}
              description={client.description}
              alt={translateMessageId(client.alt, intl)}
              gitHubRepo={client.gitHubRepo}
            />
          ))}
        </StyledCardGrid>
      </Content>
      <Staking>
        <StyledCalloutBanner
          image={data.rhino.childImageSharp.fluid}
          alt={translateMessageId("open-rhino-img-alt", intl)}
          title={translateMessageId("page-open-get-involved-stake", intl)}
          description={translateMessageId(
            "page-open-get-involved-stake-desc",
            intl
          )}
        >
          <div>
            <ButtonLink to="/open/staking/">
              <Translation id="page-open-get-involved-stake-bto" />
            </ButtonLink>
          </div>
        </StyledCalloutBanner>
      </Staking>
      <StyledGrayContainer>
        <Content>
          <Row>
            <LeftColumn>
              <H2 id="#bug-bounty">
                <Translation id="page-open-get-involved-bug-hunting" />
              </H2>
              <p>
                <Translation id="page-open-get-involved-bug-hunting-desc" />
              </p>
              <p>
                <Translation id="page-open-get-involved-bug" />
              </p>
              <ul>
                <li>
                  <Translation id="page-open-get-involved-bug-li" />
                </li>
                <li>
                  <Translation id="page-open-get-involved-bug-li-2" />
                </li>
                <li>
                  <Translation id="page-open-get-involved-bug-li-3" />
                </li>
                <li>
                  <Translation id="page-open-get-involved-bug-li-4" />
                </li>
              </ul>
              <ButtonLink to="/open/get-involved/bug-bounty/">
                <Translation id="page-open-get-involved-bug-hunting" />
              </ButtonLink>
            </LeftColumn>
            <LeaderboardContainer>
              <Leaderboard content={bountyHunters} limit={5} />
            </LeaderboardContainer>
          </Row>
        </Content>
      </StyledGrayContainer>
      <Content>
        <ReverseRow>
          <LeftColumn>
            <StyledCardList content={ethresearch} />
          </LeftColumn>
          <RightColumn>
            <H2>
              <Translation id="page-open-get-involved-join" />
            </H2>
            <p>
              <Translation id="page-open-get-involved-join-desc" />
            </p>
          </RightColumn>
        </ReverseRow>
      </Content>
    </Page>
  )
}

export default GetInvolvedPage


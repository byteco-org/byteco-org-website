import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import ButtonLink from "../../components/ButtonLink"
import Card from "../../components/Card"
import ActionCard from "../../components/ActionCard"
import CalloutBanner from "../../components/CalloutBanner"
import Emoji from "../../components/Emoji"
import Eth2Articles from "../../components/Eth2Articles"
import Eth2Diagram from "../../components/Eth2Diagram"
import ExpandableCard from "../../components/ExpandableCard"
import GhostCard from "../../components/GhostCard"
import InfoBanner from "../../components/InfoBanner"
import Link from "../../components/Link"
import PageMetadata from "../../components/PageMetadata"
import Translation from "../../components/Translation"
import PageHero from "../../components/PageHero"
import {
  CardContainer,
  Content,
  Page,
  Divider,
} from "../../components/SharedStyledComponents"
import { translateMessageId } from "../../utils/translations"

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const H2 = styled.h2`
  text-align: left;
  margin-top: 0;
  margin-bottom: 1rem;
`

const CentreCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  margin: 1rem;
  padding: 1.5rem;
  text-align: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }
`

const StyledCardContainer = styled(CardContainer)`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

const StyledCard = styled(Card)`
  flex: 1 1 30%;
  min-width: 240px;
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
  margin: 1rem;
  padding: 1.5rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex: 1 1 30%;
  }

  &:hover {
    border-radius: 4px;
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.15);
    background: ${(props) => props.theme.colors.tableBackgroundHover};
    transition: transform 0.1s;
    transform: scale(1.02);
  }
`

const Disclaimer = styled.div`
  margin: 0rem 12rem;
  display: flex;
  text-align: center;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 0rem 2rem;
  }
`

const StyledInfoBanner = styled(InfoBanner)`
  margin-left: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin: 2rem 0;
  }
`

const Vision = styled.div`
  margin-top: 4rem;
`

const ContributeCard = styled.div`
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0rem 3rem;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: 0rem;
    margin-right: 0rem;
    flex-direction: column;
    align-items: flex-start;
  }
`

const StyledCallout = styled(CalloutBanner)`
  margin-left: 0rem;
  margin-right: 0rem;
`

const ContributeButton = styled(ButtonLink)`
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 100%;
    margin-top: 1.5rem;
  }
`

const Staking = styled.div`
  padding: 4rem;
  background: ${(props) => props.theme.colors.cardGradient};
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding: 2rem;
  }
`

const StakingColumns = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`

const CenterH2 = styled(H2)`
  text-align: center;
`

const StakingLeftColumn = styled.div``

const StakingRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem 2rem;
  margin-left: 8rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    align-items: flex-start;
    flex-direction: column-reverse;
    margin: 0rem;
    margin-top: 2rem;
  }
`

const StakingCard = styled(StyledCard)`
  margin: 0;
`

const StakingImage = styled(Img)`
  margin: 3rem 0;
  align-self: center;
  width: 100%;
  max-width: 320px;
`

const LeftColumn = styled.div`
  width: 100%;
`

const RightColumn = styled.div`
  width: 100%;
  margin-left: 2rem;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    margin-left: 0rem;
    flex-direction: column;
  }
`

const FullWidthContainer = styled(Page)`
  background: ${(props) => props.theme.colors.ednBackground};
  padding: 2rem;
  overflow-x: scroll;
  margin-bottom: 2rem;
`

const Faq = styled.div`
  display: flex;
  margin-top: 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const ResearchContainer = styled.div`
  margin-top: 2rem;
`

const paths = [
  {
    emoji: ":rocket:",
    title: <Translation id="page-open-scalable" />,
    description: <Translation id="page-open-scalable-desc" />,
  },
  {
    emoji: ":shield:",
    title: <Translation id="page-open-secure" />,
    description: <Translation id="page-open-secure-desc" />,
  },
  {
    emoji: ":evergreen_tree:",
    title: <Translation id="page-open-index-staking-sustainability" />,
    description: <Translation id="page-open-sustainable-desc" />,
  },
]

const Eth2IndexPage = ({ data }) => {
  const intl = useIntl()

  const heroContent = {
    title: translateMessageId("page-open-upgrades", intl),
    header: translateMessageId("page-open-upgrading", intl),
    subtitle: translateMessageId("page-open-upgrade-desc", intl),
    image: data.docking.childImageSharp.fluid,
    alt: translateMessageId("page-dapps-doge-img-alt", intl),
    buttons: [
      {
        content: translateMessageId("page-open-explore-btn", intl),
        path: "/open/beacon-chain/",
      },
      {
        content: translateMessageId("page-open-whats-byteco", intl),
        path: "/what-is-byteco/",
        isSecondary: "isSecondary",
      },
    ],
  }

  const upgrades = [
    {
      image: data.beaconchain.childImageSharp.fixed,
      title: <Translation id="page-open-beacon-chain-title" />,
      description: <Translation id="page-open-beacon-chain-desc" />,
      to: "/open/beacon-chain/",
      date: <Translation id="page-open-beacon-chain-estimate" />,
    },
    {
      image: data.shards.childImageSharp.fixed,
      title: <Translation id="page-open-shard-title" />,
      description: <Translation id="page-open-shard-desc" />,
      to: "/open/shard-chains/",
      date: <Translation id="page-open-shard-estimate" />,
    },
    {
      image: data.thedocking.childImageSharp.fixed,
      title: <Translation id="page-open-docking" />,
      description: <Translation id="page-open-docking-desc" />,
      to: "/open/docking/",
      date: <Translation id="page-open-docking-estimate" />,
    },
  ]

  return (
    <Page>
      <PageMetadata
        title={translateMessageId("page-open-meta-title", intl)}
        description={translateMessageId("page-open-meta-desc", intl)}
      />
      <PageHero content={heroContent} />
      <Divider />
      <Content>
        <Row>
          <GhostCard>
            <H2>
              <Translation id="page-open-whats-open" />
            </H2>
            <Translation id="page-open-whats-open-desc" />
          </GhostCard>
          <StyledInfoBanner isWarning={true}>
            <H2>
              <Translation id="page-open-what-to-do" />
            </H2>
            <Translation id="page-open-what-to-do-desc" /> <br />
            <Link to="/open/get-involved/">
              <Translation id="page-open-get-involved" />
            </Link>
          </StyledInfoBanner>
        </Row>
        <Vision>
          <H2>
            <Translation id="page-open-vision" />
            <Emoji ml={`0.5rem`} text=":sparkles:" />
          </H2>
          <p>
            <Translation id="page-open-vision-desc" />
          </p>
          <CardContainer>
            {paths.map((path, idx) => (
              <CentreCard
                key={idx}
                emoji={path.emoji}
                title={path.title}
                description={path.description}
              />
            ))}
          </CardContainer>
        </Vision>
      </Content>
      <StyledCallout
        image={data.oldship.childImageSharp.fluid}
        alt={translateMessageId("page-bto-whats-bto-hero-alt", intl)}
        title={translateMessageId("page-open-dive", intl)}
        description={translateMessageId("page-open-dive-desc", intl)}
      >
        <div>
          <ButtonLink to="/open/vision/">
            <Translation id="page-open-vision-btn" />
          </ButtonLink>
        </div>
      </StyledCallout>
      <Content>
        <H2>
          <Translation id="page-open-the-upgrades" />
        </H2>
        <p>
          <Translation id="page-open-the-upgrades-desc" />
        </p>
        <StyledCardContainer>
          {upgrades.map((upgrade, idx) => (
            <ActionCard
              isRight
              key={idx}
              image={upgrade.image}
              title={upgrade.title}
              description={upgrade.description}
              to={upgrade.to}
            >
              <h6>{upgrade.date}</h6>
            </ActionCard>
          ))}
        </StyledCardContainer>
      </Content>
      <FullWidthContainer>
        <Eth2Diagram />
      </FullWidthContainer>
      <Content>
        <ContributeCard>
          <div>
            <H2>
              <Translation id="page-open-help" />
            </H2>
            <Translation id="page-open-help-desc" />
          </div>
          <ContributeButton isSecondary to="/open/get-involved/">
            <Translation id="page-open-get-involved-2" />
          </ContributeButton>
        </ContributeCard>
        <Disclaimer>
          <em>
            <Translation id="page-open-unofficial-roadmap" />
          </em>
        </Disclaimer>
      </Content>

      <Staking>
        <H2>
          <Translation id="page-open-index-staking" />
        </H2>
        <StakingColumns>
          <StakingLeftColumn>
            <p>
              <Translation id="page-open-index-staking-desc" />
            </p>
            <h3>
              <Translation id="page-open-index-staking-step-1" />
            </h3>
            <p>
              <Translation id="page-open-index-staking-step-1-desc" />
            </p>
            <ButtonLink to="https://launchpad.byteco.org">
              <Translation id="page-open-index-staking-step-1-btn" />
            </ButtonLink>
            <h3>
              <Translation id="page-open-index-staking-step-2" />
            </h3>
            <p>
              <Translation id="page-open-index-staking-step-2-desc" />
            </p>
            <ButtonLink to="/open/deposit-contract/">
              <Translation id="page-open-index-staking-step-2-btn" />
            </ButtonLink>
          </StakingLeftColumn>
          <StakingRightColumn>
            <StakingCard
              emoji=":money_with_wings:"
              title={translateMessageId("page-open-index-staking-learn", intl)}
              description={translateMessageId(
                "page-open-index-staking-learn-desc",
                intl
              )}
            >
              <ButtonLink to="/open/staking/">
                <Translation id="page-open-deposit-contract-staking-more-link" />
              </ButtonLink>
            </StakingCard>
            <StakingImage fluid={data.rhino.childImageSharp.fluid} />
          </StakingRightColumn>
        </StakingColumns>
      </Staking>
      <Divider />
      <Content>
        <CenterH2>
          <Translation id="page-open-question-title" />
        </CenterH2>
        <Faq>
          <LeftColumn>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-1-desc",
                intl
              )}
              title={translateMessageId("page-open-question-1-title", intl)}
            >
              <Link to="/open/beacon-chain/">
                <Translation id="page-open-beacon-chain-title" />
              </Link>
              <p>
                <Translation id="page-open-beacon-chain-date" />
              </p>
              <Link to="/open/shard-chains/">
                <Translation id="page-open-shard-title" />
              </Link>
              <p>
                <Translation id="page-open-shard-date" />
              </p>
              <Link to="/open/docking/">
                <Translation id="page-open-docking" />
              </Link>
              <p>
                <Translation id="page-open-docking-answer-1" />{" "}
                <Link to="/glossary/#mainnet">
                  <Translation id="page-open-docking-mainnet" />
                </Link>
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-2-desc",
                intl
              )}
              title={translateMessageId("page-open-question-2-title", intl)}
            >
              <p>
                <Translation id="page-open-answer-1" />{" "}
                <Link to="/open/beacon-chain/">
                  <Translation id="page-open-more-on-upgrades" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-answer-2" />{" "}
                <Link to="/glossary/#mainnet">
                  <Translation id="page-open-docking-mainnet" />
                </Link>{" "}
              </p>
              <p>
                <Translation id="page-open-answer-4" />{" "}
                <Link to="/open/vision/">
                  <Translation id="page-open-vision-btn" />
                </Link>
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-3-desc",
                intl
              )}
              title={translateMessageId("page-open-question-3-title", intl)}
            >
              <p>
                <Translation id="page-open-question3-answer-1" />
              </p>
              <p>
                <Translation id="page-open-question-3-answer-2" />
              </p>
              <ul>
                <li>
                  <Link to="/open/shard-chains/">
                    <Translation id="page-open-shard-lower" />
                  </Link>
                </li>
                <li>
                  <Link to="/open/docking/">
                    <Translation id="page-open-just-docking" />
                  </Link>
                </li>
              </ul>
              <p>
                <Translation id="page-open-question-3-answer-3" />
              </p>
              <Link to="https://ethresear.ch">
                <Translation id="page-open-question-3-answer-3-link" />
              </Link>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-4-desc",
                intl
              )}
              title={translateMessageId("page-open-question-4-title", intl)}
            >
              <p>
                <Translation id="page-open-question-4-answer-1" />{" "}
                <Link to="/developers/docs/mining/">
                  <Translation id="page-open-miners" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-4-answer-2" />{" "}
                <Link to="/open/docking/">
                  <Translation id="page-open-just-docking" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-4-answer-3" />{" "}
                <Link to="/developers/docs/consensus-mechanisms/pos/">
                  <Translation id="page-open-proof-stake-link" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-4-answer-6" />{" "}
                <Link to="/open/staking/">
                  <Translation id="page-open-question-4-answer-7" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-4-answer-8" />
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-5-desc",
                intl
              )}
              title={translateMessageId("page-open-question-5-title", intl)}
            >
              <p>
                <Translation id="page-open-question-5-answer-1" />
              </p>
              <p>
                <Link to="/open/staking/">
                  <Translation id="page-open-deposit-contract-staking-more-link" />
                </Link>
              </p>
            </ExpandableCard>
          </LeftColumn>
          <RightColumn>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-6-desc",
                intl
              )}
              title={translateMessageId("page-open-question-6-title", intl)}
            >
              <p>
                <Translation id="page-open-question-6-answer-1" />
              </p>
              <ul>
                <li>
                  <Link to="/open/shard-chains/">
                    <Translation id="page-open-shard-lower" />
                  </Link>
                </li>
                <li>
                  <Link to="/open/docking/">
                    <Translation id="page-open-just-docking" />
                  </Link>
                </li>
              </ul>
              <p>
                <Translation id="page-open-question-6-answer-3" />{" "}
                <Link to="https://blog.byteco.org">
                  <Translation id="page-open-bto-blog" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-6-answer-4" />{" "}
                <Link to="https://open.news">
                  <Translation id="page-open-whats-new" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-6-answer-5" />{" "}
                <Link to="https://ethresear.ch">
                  <Translation id="page-open-question-3-answer-3-link" />
                </Link>
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-7-desc",
                intl
              )}
              title={translateMessageId("page-open-question-7-title", intl)}
            >
              <p>
                <Translation id="page-open-question-7-teams" />
              </p>
              <ul>
                <li>
                  <Link to="https://trinity.byteco.org/">
                    <Translation id="page-open-question-7-trinity" />
                  </Link>{" "}
                  <Translation id="page-open-question-7-trinity-lang" />
                </li>
                <li>
                  <Link to="https://sigmaprime.io/">
                    <Translation id="page-open-question-7-lighthouse" />
                  </Link>{" "}
                  <Translation id="page-open-question-7-lighthouse-lang" />
                </li>
                <li>
                  <Link to="https://nimbus.team/">
                    <Translation id="page-open-question-7-nimbus" />
                  </Link>{" "}
                  <Translation id="page-open-question-7-nimbus-lang" />
                </li>
                <li>
                  <Link to="https://prysmaticlabs.com/">
                    <Translation id="page-open-question-7-prysm" />
                  </Link>{" "}
                  <Translation id="page-open-question-7-prysm-lang" />
                </li>
                <li>
                  <Link to="https://nethermind.io/">
                    <Translation id="page-open-question-7-cortex" />
                  </Link>{" "}
                  <Translation id="page-open-question-7-cortex-lang" />
                </li>
                <li>
                  <Link to="https://pegasys.tech/teku-byteco-2-for-enterprise/">
                    <Translation id="page-open-question-7-teku" />
                  </Link>{" "}
                  <Translation id="page-open-question-7-teku-lang" />
                </li>
                <li>
                  <Link to="https://github.com/chainsafe/lodestar#getting-started">
                    <Translation id="page-open-question-7-lodestar" />
                  </Link>{" "}
                  <Translation id="page-open-question-7-lodestar-lang" />
                </li>
              </ul>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-8-desc",
                intl
              )}
              title={translateMessageId("page-open-question-8-title", intl)}
            >
              <p>
                <Translation id="page-open-question-8-answer-1" />
              </p>
              <p>
                <Translation id="page-open-question-8-answer-2" />{" "}
                <Link to="/open/beacon-chain">
                  <Translation id="page-open-upgrades-guide" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-8-answer-3" />
              </p>
              <p>
                <Translation id="page-open-question-8-answer-4" />
              </p>
              <p>
                <ButtonLink to="/open/vision/">
                  <Translation id="page-open-question-8-answer-6" />
                </ButtonLink>
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-9-desc",
                intl
              )}
              title={translateMessageId("page-open-question-9-title", intl)}
            >
              <p>
                <Translation id="page-open-question-9-answer-1" />{" "}
                <Link to="/open/staking/">
                  <Translation id="page-open-question-9-stake-bto" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-9-answer-2" />{" "}
                <Link to="/open/get-involved/">
                  <Translation id="page-open-clients" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-9-answer-3" />{" "}
                <Link to="/open/get-involved/bug-bounty/">
                  <Translation id="page-open-bug-bounty" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-9-answer-4" />{" "}
                <Link to="https://ethresear.ch">
                  <Translation id="page-open-question-3-answer-3-link" />
                </Link>
              </p>
            </ExpandableCard>
            <ExpandableCard
              contentPreview={translateMessageId(
                "page-open-question-10-desc",
                intl
              )}
              title={translateMessageId("page-open-question-10-title", intl)}
            >
              <p>
                <Translation id="page-open-question-10-answer-1" />{" "}
                <Link to="/open/beacon-chain/">
                  <Translation id="page-open-question-10-answer-1-link" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-10-answer-2" />
              </p>
              <p>
                <Translation id="page-open-question-10-answer-3" />
              </p>
              <p>
                <Translation id="page-open-question-10-answer-5" />
              </p>
              <p>
                <Translation id="page-open-question-10-answer-6" />{" "}
                <Link to="/developers/docs/consensus-mechanisms/pos/">
                  <Translation id="page-open-proof-stake-link" />
                </Link>
              </p>
              <p>
                <Translation id="page-open-question-10-answer-7" />{" "}
                <Link to="/open/shard-chains/#code-execution">
                  <Translation id="page-open-question-10-answer-8" />
                </Link>
              </p>
            </ExpandableCard>
          </RightColumn>
        </Faq>
      </Content>
      <Divider />
      <Content>
        <H2>
          <Translation id="page-open-stay-up-to-date" />
        </H2>
        <p>
          <Translation id="page-open-stay-up-to-date-desc" />
        </p>
        <Eth2Articles />
        <ResearchContainer>
          <H2>
            <Translation id="page-open-take-part" />
          </H2>
          <p>
            <Translation id="page-open-take-part-desc" />
          </p>
          <ButtonLink to="https://ethresear.ch/">
            <Translation id="page-open-head-to" /> ethresear.ch
          </ButtonLink>
        </ResearchContainer>
      </Content>
    </Page>
  )
}

export default Eth2IndexPage

export const query = graphql`
  query {
    oldship: file(relativePath: { eq: "open/oldship.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rhino: file(relativePath: { eq: "open/eth2_rhino.png" }) {
      childImageSharp {
        fluid(maxWidth: 320) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    docking: file(relativePath: { eq: "open/docking.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beaconchain: file(relativePath: { eq: "open/core.png" }) {
      childImageSharp {
        fixed(width: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    shards: file(relativePath: { eq: "open/newrings.png" }) {
      childImageSharp {
        fixed(width: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    thedocking: file(relativePath: { eq: "open/docking.png" }) {
      childImageSharp {
        fixed(width: 420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

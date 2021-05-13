import React from "react"
import styled from "styled-components"
import Emoji from "./Emoji"

import Link from "./Link"

const meetups = [

  {
    title: "Chiang Mai Dapps",
    emoji: ":thailand:",
    location: "Chiang Mai",
    link: "https://www.facebook.com/groups/219236462407862/",
  },
]

const Table = styled.div`
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
`

const Item = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text} !important;
  box-shadow: 0 1px 1px ${(props) => props.theme.colors.tableItemBoxShadow};
  margin-bottom: 1px;
  padding: 1rem;
  width: 100%;
  color: #000;

  &:hover {
    border-radius: 4px;
    box-shadow: 0 0 1px ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.tableBackgroundHover};
  }
`

const ItemNumber = styled.div`
  margin-right: 1rem;
  opacity: 0.4;
`
const ItemTitle = styled.div``
const ItemDesc = styled.p`
  margin-bottom: 0;
  opacity: 0.6;
`

const RightContainer = styled.div`
  display: flex;
  align-items: right;
  align-content: flex-start;
  flex: 1 1 25%;
  margin-right: 1rem;
  flex-wrap: wrap;
`
const LeftContainer = styled.div`
  display: flex;
  flex: 1 1 75%;
  margin-right: 1rem;
`
// TODO create generalized CardList / TableCard
// TODO prop if ordered list or unordered
const MeetupList = () => (
  <Table>
    {meetups.map((meetup, idx) => (
      <Item key={idx} to={meetup.link}>
        <LeftContainer>
          <ItemNumber>{idx + 1}</ItemNumber>
          <ItemTitle>{meetup.title}</ItemTitle>
        </LeftContainer>
        <RightContainer>
          <Emoji text={meetup.emoji} size={1} mr={`0.5em`} />
          <ItemDesc>{meetup.location}</ItemDesc>
        </RightContainer>
      </Item>
    ))}
  </Table>
)

export default MeetupList

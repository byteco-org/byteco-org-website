import React, { useEffect, useState } from "react"
import { shuffle } from "lodash"

import Link from "./Link"
import Translation from "./Translation"

const appList = [
  {
    name: "Gitcoin",
    url: "https://gitcoin.co",
    description: "random-app-list-gitcoin",
  },
  {
    name: "Cent",
    url: "https://beta.cent.co",
    description: "random-app-list-cent",
  },
  {
    name: "Decentraland",
    url: "https://decentraland.org/",
    description: "random-app-list-decentraland",
  },

]

const RandomAppList = () => {
  const [randomAppList, setRandomAppList] = useState([])

  useEffect(() => {
    const list = shuffle(appList)
    setRandomAppList(list)
  }, [])

  return (
    <ul>
      {randomAppList.map((item, idx) => (
        <li key={idx}>
          <Link to={item.url}>{item.name}</Link>
          , <Translation id={item.description} />
        </li>
      ))}
    </ul>
  )
}

export default RandomAppList

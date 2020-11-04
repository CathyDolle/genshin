import React, { useContext } from "react"
import colorContext from "../contexts/color"

// LOGO TYPES
import { Anemo } from "genshin-icon"
import { Geo } from "genshin-icon"
import { Electro } from "genshin-icon"
import { Dendro } from "genshin-icon"
import { Hydro } from "genshin-icon"
import { Pyro } from "genshin-icon"
import { Cryo } from "genshin-icon"

// CHAR
import jean from "./../assets/images/char/jean.png"
import ningguang from "./../assets/images/char/ningguang.png"

export const elements = [
  {
    Component: Anemo,
    name: "anemo",
    color: "var(--anemo-color)",
    character: jean
  },
  {
    Component: Geo,
    name: "geo",
    color: "var(--geo-color)",
    character: ningguang
  },
  {
    Component: Electro,
    name: "electro",
    color: "var(--electro-color)",
  },
  {
    Component: Dendro,
    name: "dendro",
    color: "var(--dendro-color)",
  },
  {
    Component: Hydro,
    name: "hydro",
    color: "var(--hydro-color)",
  },
  {
    Component: Pyro,
    name: "pyro",
    color: "var(--pyro-color)",
  },
  {
    Component: Cryo,
    name: "cryo",
    color: "var(--cryo-color)",
  },
]

function Elements() {
  const { current, setColor } = useContext(colorContext)

  return (
    <div className="elements_container">
      {elements.map(({ Component, color, name }) => (
        <Component
          key={color}
          className="elements"
          onClick={() => setColor(name)}
          size="35"
          color={name === current ? color : "var(--inactive)"}
        />
      ))}
    </div>
  )
}

export default Elements

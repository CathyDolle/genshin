import React from "react"

// LOGO TYPES
import { Anemo } from "genshin-icon"
import { Geo } from "genshin-icon"
import { Electro } from "genshin-icon"
import { Dendro } from "genshin-icon"
import { Hydro } from "genshin-icon"
import { Pyro } from "genshin-icon"
import { Cryo } from "genshin-icon"

function Elements() {
  return (
    <div className="elements_container">
      <Anemo className="elements" size="35" color="var(--anemo-color)" />
      <Geo className="elements" size="35" color="var(--inactive)" />
      <Electro className="elements" size="35" color="var(--inactive)" />
      <Dendro className="elements" size="35" color="var(--inactive)" />
      <Hydro className="elements" size="35" color="var(--inactive)" />
      <Pyro className="elements" size="35" color="var(--inactive)" />
      <Cryo className="elements" size="35" color="var(--inactive)" />
    </div>
  )
}

export default Elements

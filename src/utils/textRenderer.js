import { Fragment } from "react"

const renderWithNextLine = (text) =>
  text.split("\n").map((entry) => (
    <Fragment key={entry}>
      {entry}
      <br />
    </Fragment>
  ))

export { renderWithNextLine }

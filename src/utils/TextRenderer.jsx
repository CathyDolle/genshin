import React, { Fragment } from 'react';

const RenderWithNextLine = (text) => text.split('\n').map((entry) => (
  <Fragment key={entry}>
    {entry}
    <br />
  </Fragment>
));

export default RenderWithNextLine;

import React, { useContext } from 'react';
import Wrapper from '../components/Wrapper';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../components/TextContent';

// CONTEXT
import colorContext from '../contexts/element';
import { elements } from '../components/Elements/elementsData';

// TEXT
import indispensables from '../text/indispensables';

const {
  post1Title,
  post1Text,
  post1src,
  post1LinkName,
  post1Link,
  post2Title,
  post2Text,
  post2src,
  post2LinkName,
  post2Link,
  post3Title,
  post3Text,
  post3src,
  post3LinkName,
  post3Link,
} = indispensables;

function Indispensables() {
  const { current } = useContext(colorContext);
  const CurrentElement = elements.find(({ name }) => current === name);
  return (
    <Wrapper>
      <Visual srcLeft={CurrentElement.leftChar} height="95%" />
      <Content>
        <TextContent
          title={post1Title}
          hrefName={post1LinkName}
          href={post1Link}
          src={post1src}
          text={post1Text}
        />

        <TextContent
          title={post2Title}
          text={post2Text}
          toName={post2LinkName}
          to={post2Link}
          src={post2src}
        />

        <TextContent
          title={post3Title}
          text={post3Text}
          toName={post3LinkName}
          to={post3Link}
          src={post3src}
        />
      </Content>
    </Wrapper>
  );
}

export default Indispensables;

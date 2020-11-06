import React, { useContext } from 'react';
import Wrapper from '../components/Wrapper';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../components/TextContent';

// CONTEXT
import colorContext from '../contexts/element';
import { elements } from '../components/Elements/elementsData';
import indispensable from '../text/indispensables'; // TEXT FILE

const { article } = indispensable;

function Indispensables() {
  const { current } = useContext(colorContext);
  const CurrentElement = elements.find(({ name }) => current === name);
  return (
    <Wrapper>
      <Visual src={CurrentElement.leftChar} position="left" height="95%" />
      <Content>
        {article.map(({
          title, text, src, linkName, link,
        }) => (
          <TextContent
            title={title}
            hrefName={linkName}
            href={link}
            src={src}
            text={text}
          />
        ))}
      </Content>
    </Wrapper>
  );
}

export default Indispensables;

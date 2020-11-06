import React, { useContext } from 'react';
import Wrapper from '../components/Wrapper';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../components/TextContent';
import colorContext from '../contexts/element';
import { elements } from '../components/Elements/elementsData';

import homeData from '../text/home';

const {
  title,
  text,
  codeTitle,
  codeText,
} = homeData;

function Home() {
  const { current } = useContext(colorContext);
  const CurrentElement = elements.find(({ name }) => current === name);
  return (
    <Wrapper>
      <Content>
        <TextContent title={title} text={text} />
        <TextContent
          title={codeTitle}
          text={codeText}
          //   href="https://genshin.mihoyo.com/fr/gift"
          hrefName="ici"
          //   src={jeanHeart}
          // src={razorCry}
        />
      </Content>
      <Visual src={CurrentElement.char} position="right" height="100%" />
    </Wrapper>
  );
}

export default Home;

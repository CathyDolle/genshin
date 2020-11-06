import React, { useContext } from 'react';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../modules/TextContent/TextContent';
import colorContext from '../contexts/element';
import { elements } from '../data/elementsData';

import homeData from '../data/home';
import Wrapper from '../templates/Wrapper/Wrapper';

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

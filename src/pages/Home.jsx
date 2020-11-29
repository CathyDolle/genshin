import React from 'react';
import { useSelector } from 'react-redux';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../modules/TextContent/TextContent';
import { elements } from '../data/elementsData';

import homeData from '../data/home';
import Wrapper from '../templates/Wrapper/Wrapper';
import { getElementData } from '../redux/appSlice';

const {
  title,
  text,
  codeTitle,
  codeText,
} = homeData;

function Home() {
  const element = useSelector(getElementData);
  const CurrentElement = elements.find(({ name }) => element === name);

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
      {CurrentElement && <Visual src={CurrentElement.char} position="right" height="100%" />}
    </Wrapper>
  );
}

export default Home;

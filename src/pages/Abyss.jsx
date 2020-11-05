import React from 'react';
import Wrapper from '../components/Wrapper';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../components/TextContent';

// CHAR
import sucrose from '../assets/images/char/sucrose.png';
import amberWow from '../assets/images/chibi/amberWow.png';
import razorCry from '../assets/images/chibi/razorCry.png';

const GuideAbyss = () => (
  <Wrapper>
    <Visual srcLeft={sucrose} height="90%" />
    <Content>
      {/* LEVELING */}
      <TextContent
        title="Mobs etc."
        src={amberWow}
        text="Soyez curieux blabla ouvrez les coffres"
      />
      <TextContent
        title="Coupons"
        text="Pas de code cette semaine :("
        //   href="https://genshin.mihoyo.com/fr/gift"
        linkName="ici"
        target="_blank"
        //   src={jeanHeart}
        src={razorCry}
      />
    </Content>
  </Wrapper>
);

export default GuideAbyss;

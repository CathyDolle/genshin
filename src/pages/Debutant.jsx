import React from 'react';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../modules/TextContent/TextContent';

import principal from '../assets/images/char/principal.png';
import amberWow from '../assets/images/chibi/amberWow.png';
import razorCry from '../assets/images/chibi/razorCry.png';
import Wrapper from '../templates/Wrapper/Wrapper';

function GuideDebutant() {
  return (
    <Wrapper>
      <Visual src={principal} position="left" height="95%" />
      <Content>
        {/* LEVELING */}
        <TextContent
          title="Les voeux"
          src={amberWow}
          text="Soyez curieux blabla ouvrez les coffres"
        />
        <TextContent
          title="Coupons"
          text="Pas de code cette semaine :("
          //   href="https://genshin.mihoyo.com/fr/gift"
          linkText="ici"
          //   src={jeanHeart}
          src={razorCry}
        />
      </Content>
    </Wrapper>
  );
}

export default GuideDebutant;

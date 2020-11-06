import React from 'react';
import Content from '../components/Content';
import TextContent from '../modules/TextContent/TextContent';

import abyss from '../assets/images/banner/abyss.png';
import chibiGuide from '../assets/images/chibi/chibiGuide.png';
import chibiAbyss from '../assets/images/chibi/chibiAbyss.png';
import guide from '../assets/images/banner/guide.png';
import Wrapper from '../templates/Wrapper/Wrapper';

function Guides() {
  return (
    <Wrapper>
      <Content>
        <TextContent
          title="Guide du débutant"
          src={chibiGuide}
          text="Retrouve tout plein d'astuces et des erreurs à ne pas faire."
          banner={guide}
          linkText="Lire le guide"
          to="/guides/debutant"
        />
      </Content>
      <Content>
        <TextContent
          title="Guide des abysses"
          src={chibiAbyss}
          text="Retrouve tout plein d'astuces et des erreurs à ne pas faire. "
          banner={abyss}
          linkText="Lire le guide"
          to="/guides/abyss"
        />
      </Content>
    </Wrapper>
  );
}

export default Guides;

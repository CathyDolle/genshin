import React from 'react';
import Wrapper from '../components/Wrapper';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../components/TextContent';

// CHAR
import xiao from '../assets/images/char/xiao.png';
import chibiMap from '../assets/images/chibi/chibiMap.png';
import chibiTimer from '../assets/images/chibi/chibiTimer.png';

function News() {
  return (
    <Wrapper>
      <Visual srcCustom={xiao} height="95%" />
      <Content>
        <TextContent
          title="Nouveauté de la 1.1"
          hrefName="▶ Regarder le trailer"
          href="https://twitter.com/Genshin_7/status/1322148834001129473"
          src={chibiMap}
          text="La maj est prévue pour le 11 novembre, aucune région n'a été annoncée. Pour plus d'infos :"
        />
        <TextContent
          title="Timer"
          text="Pour voir le temps de respawn des ressources"
          //   href="https://genshin.mihoyo.com/fr/gift"
          toName="▶ Voir les timers"
          to="/"
          src={chibiTimer}
        />

        <TextContent
          title="Test"
          text="Pour voir le temps de respawn des ressources"
          //   href="https://genshin.mihoyo.com/fr/gift"
          toName="▶ Voir les timers"
          to="/"
          src={chibiTimer}
        />
      </Content>
    </Wrapper>
  );
}

export default News;

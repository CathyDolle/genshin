import Wrapper from '../components/Wrapper';
import Visual from '../components/Visual';
import Content from '../components/Content';
import TextContent from '../components/TextContent';

// CHAR
import principal from '../assets/images/char/principal.png';
import amberWow from '../assets/images/chibi/amberWow.png';
import razorCry from '../assets/images/chibi/razorCry.png';

function GuideDebutant() {
  return (
    <Wrapper>
      <Visual srcLeft={principal} height="95%" />
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
          linkName="ici"
          target="_blank"
          //   src={jeanHeart}
          src={razorCry}
        />
      </Content>
    </Wrapper>
  );
}

export default GuideDebutant;

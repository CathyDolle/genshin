import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// CHAR
import jean from "../assets/images/char/jean.png"
import jeanHeart from "../assets/images/chibi/jeanHeart.png"
import razorCry from "../assets/images/chibi/razorCry.png"

function Home() {
  return (
    <Wrapper>
      <Content>
        <TextContent
          title="Welcome"
          src={jeanHeart}
          text="Dernier update : 03/11/2020"
        />
        <TextContent
          title="Coupons"
          text="Pas de code cette semaine :("
          //   href="https://genshin.mihoyo.com/fr/gift"
          hrefName="ici"
          //   src={jeanHeart}
          src={razorCry}
        />
      </Content>
      <Visual srcRight={jean} height="100%" />
    </Wrapper>
  )
}

export default Home

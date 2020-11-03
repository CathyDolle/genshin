import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// CHAR
import lisa from "../assets/images/char/lisa.png"
import jeanHeart from "../assets/images/chibi/jeanHeart.png"
import razorCry from "../assets/images/chibi/razorCry.png"

function Indispensables() {
  return (
    <Wrapper>
      <Visual srcLeft={lisa} height="95%" />
      <Content>
        <TextContent
          title="Welcome"
          src={jeanHeart}
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea."
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
  )
}

export default Indispensables

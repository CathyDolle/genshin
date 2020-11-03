import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// CHAR
import Jean from "../assets/images/char/jean.png"

function Home() {
  return (
    <Wrapper>
      <Content>
        <TextContent
          title="Welcome"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea."
        />
        <TextContent
          title="Coupons"
          text="Profitez de 160 primos gemmes en
            Rentrant le code GENSHINR70 "
          href="https://genshin.mihoyo.com/fr/gift"
          linkName="ici"
          target="_blank"
        />
      </Content>
      <Visual src={Jean} height="90%" />
    </Wrapper>
  )
}

export default Home

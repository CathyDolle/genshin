import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// CHAR
import sucrose from "../assets/images/char/sucrose.png"

// TEXT
import indispensables from "../text/indispensables"
const { post1Title, post1Text, post1src, post2Title, post2Text, post2src } = indispensables


function Indispensables() {
  return (
    <Wrapper>
      <Visual srcLeft={sucrose} height="95%" />
      <Content>
        <TextContent
          title={post1Title}
          hrefName="▶ Voir la map"
          href="https://www.genshin-impact.fr/map/"
          src={post1src}
          text={post1Text}
        />

        <TextContent
          title={post2Title}
          text={post2Text}
          //   href="https://genshin.mihoyo.com/fr/gift"
          toName="▶ Voir les timers"
          to="/"
          src={post2src}
        />
      </Content>
    </Wrapper>
  )
}

export default Indispensables

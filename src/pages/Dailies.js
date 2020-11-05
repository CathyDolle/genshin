import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// CHAR
import paimon from "../assets/images/char/paimon.png"

// TEXT
import dailies from "../text/dailies"
const { post1Title, post1Text, post1src, post2Title, post2Text, post2src } = dailies

function Dailies() {
  return (
    <Wrapper>
      <Visual srcLeft={paimon} height="95%" />
      <Content>
        {/* LEVELING */}
        <TextContent
          title={post1Title}
          src={post1src}
          text={post1Text}
        />
        <TextContent
          title={post2Title}
          text={post2Text}
          //   href="https://genshin.mihoyo.com/fr/gift"
          linkName="ici"
          target="_blank"
          //   src={jeanHeart}
          src={post2src}
        />
      </Content>
    </Wrapper>
  )
}

export default Dailies

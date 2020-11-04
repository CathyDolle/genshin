import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// TEXT
import { homeTitle, homeText, codeTitle, codeText } from "./../text/home.json"

// CHAR

import { useContext } from "react"
import colorContext from "../contexts/color"
import { elements } from "./../components/Elements"

// import jean from "../assets/images/char/jean.png"
// import jeanHeart from "../assets/images/chibi/jeanHeart.png"
// import razorCry from "../assets/images/chibi/razorCry.png"

function Home() {
  const { current } = useContext(colorContext)
  const CurrentElement = elements.find(({ name }) => current === name)
  return (
    <Wrapper>
      <Content>
        <TextContent title={homeTitle} text={homeText} />
        <TextContent
          title={codeTitle}
          text={codeText}
          //   href="https://genshin.mihoyo.com/fr/gift"
          hrefName="ici"
          //   src={jeanHeart}
          // src={razorCry}
        />
      </Content>
      <Visual srcRight={CurrentElement.char} height="100%" />
    </Wrapper>
  )
}

export default Home

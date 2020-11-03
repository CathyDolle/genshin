import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// CHAR
import abyss from "../assets/images/banner/abyss.png"
import chibiGuide from "../assets/images/chibi/chibiGuide.png"
import chibiAbyss from "../assets/images/chibi/chibiAbyss.png"
import guide from "../assets/images/banner/guide.png"

function Guides() {
  return (
    <Wrapper>
      <Content>
        <TextContent
          title="Guide du débutant"
          src={chibiGuide}
          text="Retrouve tout plein d'astuces et des erreurs à ne pas faire.
          "
          banner={guide}
          toName="Lire le guide"
          to="/"
        />
      </Content>
      <Content>
        <TextContent
          title="Guide des abysses"
          src={chibiAbyss}
          text="Retrouve tout plein d'astuces et des erreurs à ne pas faire. "
          banner={abyss}
          toName="Lire le guide"
          to="/"
        />
      </Content>
    </Wrapper>
  )
}

export default Guides

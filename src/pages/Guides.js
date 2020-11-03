import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// CHAR
import jean from "../assets/images/char/jean.png"
import chibiGuide from "../assets/images/chibi/chibiGuide.png"
import razorCry from "../assets/images/chibi/razorCry.png"

function Guides() {
  return (
    <Wrapper>
      <Content>
        <TextContent
          title="Guide du débutant"
          src={chibiGuide}
          text="Retrouve tout plein d'astuces et des erreurs à ne pas faire."
        />
      </Content>
      <Content>
        <TextContent
          title="Guide des abysses"
          src={chibiGuide}
          text="Retrouve tout plein d'astuces et des erreurs à ne pas faire."
        />
      </Content>
    </Wrapper>
  )
}

export default Guides

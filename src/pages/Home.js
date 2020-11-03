import Nav from "../components/Nav"
import Visual from "../components/Visual"
import Content from "../components/Content"
import TextContent from "../components/TextContent"

// CHAR
import Jean from "../assets/images/char/jean.png"

function Home() {
  return (
    <section className="wrapper">
      <Nav />
      <div className="container">
        <Content>
            <TextContent title="Welcome" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea."/>
            <TextContent title="Coupons" text="Profitez de 160 primos gemmes en
Rentrant le code GENSHINR70 ici"/>
        </Content>
        <Visual src={Jean} height="90%" />
      </div>
    </section>
  )
}

export default Home

import FadeOutIn from "./FadeOutIn"

function Visual(props) {
  return (
    <section className="visual">
      {props.srcRight && (
        <FadeOutIn
          time={1}
          className="right"
          src={props.srcRight}
          alt="visual"
          height={props.height}
        />
      )}
      {props.srcLeft && (
        <FadeOutIn
          time={1}
          className="left"
          src={props.srcLeft}
          alt="visual"
          height={props.height}
        />
      )}
       {props.srcCustom && (
        <FadeOutIn
          time={1}
          className="xiao"
          src={props.srcCustom}
          alt="visual"
          height={props.height}
        />
      )}
    </section>
  )
}

export default Visual

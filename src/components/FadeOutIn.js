import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"

FadeOutIn.propTypes = {
  src: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

// function usePrevious(src) {
//   const ref = useRef()

//   useEffect(() => {
//     ref.current = src
//   })

//   return ref.current
// }

function FadeOutIn({ src, time, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src)
  // const prevSrc = usePrevious(src)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSrc(src)
    }, (time * 1000) / 2)

    return () => {
      clearTimeout(timer)
    }
  }, [src, time])

  return <img alt="" src={currentSrc} {...props} />
}

export default FadeOutIn

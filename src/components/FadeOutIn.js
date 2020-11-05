import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"

FadeOutIn.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

function usePrevious(src) {
  const ref = useRef()

  useEffect(() => {
    ref.current = src
  })

  return ref.current
}

function FadeOutIn({ src, time, alt, className, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [animation, setAnimation] = useState(false);
  const prevSrc = usePrevious(src)

  useEffect(() => {
    let timer;
    if (prevSrc) {
      setAnimation(true);
      timer = setTimeout(() => {
        setCurrentSrc(src);
        setAnimation(false);
      }, (time * 1000) / 2)
    }

    return () => {
      clearTimeout(timer);
      setAnimation(false);
    }
  }, [src, time])

  return <img
            alt={alt}
            className={`${animation ? 'animationClass ': ''}${className}`}
            src={currentSrc}
            {...props}
          />
}

export default FadeOutIn

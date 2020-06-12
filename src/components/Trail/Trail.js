import React from "react";
import { Spring } from 'react-spring/renderprops'
import { useTrail, useTransition, animated } from 'react-spring'
import './style.css'


function Trail (props) {

const items=(props.items)
const config = { mass: 5, tension: 2000, friction: 200 }
const trail = useTrail(items.length, {
    config,
    from: { opacity: 0, x: 0, height: 80, x: 0 },
    to: {opacity: 1, x: 30, height: 0}
  })

  return (
    <div className="box">
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Trail
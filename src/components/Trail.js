import React from "react";
import { Spring } from 'react-spring/renderprops'
import { useTrail, animated } from 'react-spring'


function Trail (props) {

const items=(props.items)
const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 30,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 30, height: 0 },
  })

  return (
    <div className="trails-main">
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

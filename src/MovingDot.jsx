

import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
//         const nextPosition = {};
// nextPosition.x = e.clientX;
// nextPosition.y = e.clientY;
// setPosition(nextPosition);
      }}
      style={{
        position: 'relative',
        width: '90vw',
        height: '90vh',
        border: '1px solid grey',
        borderRadius: '.5rem'

      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}
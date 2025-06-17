import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const SceneLightsForModel = ({ isMoon }) => {
  const keyLightRef = useRef();
  const fillLightRef = useRef();
  const [time, setTime] = useState(0);

  useFrame((_, delta) => {
    const t = time + delta;

    // Generate smooth RGB transitions
    const r = Math.floor(127.5 * (1 + Math.sin(t)));
    const g = Math.floor(127.5 * (1 + Math.sin(t + 2)));
    const b = Math.floor(127.5 * (1 + Math.sin(t + 4)));

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    if (keyLightRef.current && fillLightRef.current) {
      keyLightRef.current.color.set(rgbColor);
      fillLightRef.current.color.set(rgbColor);
    }

    setTime(t);
  });

  return (
    <>
      <ambientLight intensity={isMoon ? 1.2 : 0.8} />

      <directionalLight
        ref={keyLightRef}
        position={[5, 10, 5]}
        intensity={isMoon ? 6 : 3}
        angle={0.4}
        penumbra={0.6}
      />

      <directionalLight
        ref={fillLightRef}
        position={[-5, 8, 3]}
        intensity={isMoon ? 4.5 : 2.5}
        angle={0.3}
        penumbra={0.5}
      />
    </>
  );
};

export default SceneLightsForModel;

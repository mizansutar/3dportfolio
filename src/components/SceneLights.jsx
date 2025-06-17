import React from 'react';

const SceneLights = ({ isMoon }) => {
  return (
    <>
      <ambientLight intensity={isMoon ? 0.3 : 1} />
      <directionalLight
        position={[1, 1, 1]}
        intensity={isMoon ? 1.5 : 5}
        angle={0.2}
        penumbra={0.5}
        color={isMoon ? '#ccccff' : 'white'}
      />
      <directionalLight
        position={[-3, 5, 5]}
        intensity={isMoon ? 1 : 5}
        angle={0.2}
        penumbra={0.5}
        color={isMoon ? '#99bbff' : 'white'}
      />
    </>
  );
};

export default SceneLights;

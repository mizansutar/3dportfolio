import React, { useEffect } from 'react';
import './model1.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import SceneLightsForModel from './SceneLightsForModel'; // ✅ Replaces SceneLights

function LoadedModel({ scale, rotation, isMoon }) {
  const { scene } = useGLTF('/models/computer_and_laptop.glb');


  scene.position.set(0, -65, -35);
  return <primitive object={scene} scale={scale} rotation={rotation} />;
}

function Model1({ isMoon }) {
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const cameraPosition = isMobile
    ? [60, 90, 60]
    : isTablet
    ? [100, 120, 100]
    : [120, 140, 120];

  const modelScale = isMobile ? 0.6 : isTablet ? 0.9 : 1.1;
  const fov = isMobile ? 30 : 20;
  const modelRotation = isMobile ? [0, Math.PI / 4, 0] : [0, 0, 0];

  return (
    <Canvas className="modelfirst" camera={{ position: cameraPosition, fov }}>
      <SceneLightsForModel isMoon={isMoon} />
      <OrbitControls
        target={[0, -50, 0]}
        enableZoom={!isTablet}
        enablePan={false}
        minDistance={150}
        maxDistance={5000}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <LoadedModel scale={modelScale} rotation={modelRotation} isMoon={isMoon} />
    </Canvas>
  );
}

export default Model1;

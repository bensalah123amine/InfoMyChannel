import React, { useState, useEffect ,useRef} from 'react';
import { Canvas,useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Bed } from './componant/Bed';
import { gsap } from 'gsap';

import {Office} from "./componant/Office"







function Player() {
  const playerRef = useRef();
  const [keys, setKeys] = useState({});

  // Handle key press and release events
  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeys((keys) => ({ ...keys, [event.key.toLowerCase()]: true }));
    };

    const handleKeyUp = (event) => {
      setKeys((keys) => ({ ...keys, [event.key.toLowerCase()]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  useFrame(() => {
    if (keys?.w) playerRef.current.position.z -= 0.1;
    if (keys?.s) playerRef.current.position.z += 0.1;
    if (keys?.a) playerRef.current.position.x -= 0.1;
    if (keys?.d) playerRef.current.position.x += 0.1;
  });

  return (
    <mesh ref={playerRef} position={[0, 5, 0]}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}


function App() {
  const [targetPosition, setTargetPosition] = useState([100, 100, 40]);

  useEffect(() => {
    // Simulate model load and set the target camera position
    const loadModel = () => {
      // Update the camera position to focus on the model
      setTargetPosition([50, 40, 8.5]); // Adjust as needed
    };
    loadModel();
  }, []);

  return (
    <>
      <h1>3D Model Viewer</h1>
      <Canvas
        camera={{ position: targetPosition }}
        style={{ height: '100vh' }}
      >
       
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} />
        {/* <Bed /> */}
        <Office/>
        <Player />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;


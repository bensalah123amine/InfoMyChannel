import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

const CameraController = ({ targetPosition }) => {
  const { camera } = useThree();
  const props = useSpring({
    to: { position: targetPosition },
    config: { duration: 2000 },
    onFrame: ({ position }) => {
      camera.position.set(position[0], position[1], position[2]);
      camera.lookAt(0, 0, 0);  // Adjust this if your model's center is not at (0, 0, 0)
    },
  });

  return <animated.group />;
};

export default CameraController;
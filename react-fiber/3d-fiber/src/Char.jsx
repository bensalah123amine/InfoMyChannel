/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 char.gltf 
Author: Denys Almaral (https://sketchfab.com/denysalmaral)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/lowpoly-trump-free-character-ba7b382c918b40e6b07011da4ff3ebc0
Title: LowPoly Trump Free Character
*/
import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';''

export default function Char(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF('/char.gltf');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Check if animations exist and use useAnimations accordingly
  const { actions } = animations.length > 0 ? useAnimations(animations, group) : { actions: {} };

  return (
    
    <group ref={group} {...props} dispose={null}>
      <primitive object={clone} />
    </group>
  );
}

useGLTF.preload('/char.gltf');



{/* <group ref={group} {...props} dispose={null}>
<group name="Sketchfab_Scene">
  <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, 0]}>
    <group name="4c6925bfbfe64fc7a4208f71a9751516fbx" rotation={[-Math.PI, 0, 0]}>
      <group name="Object_2">
        <group name="RootNode">
          <group name="trump_rigCharRoot">
            <group name="Object_5">
              <primitive object={nodes._rootJoint} />
              <group name="Object_33" />
              <skinnedMesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.TrumpLPmat} skeleton={nodes.Object_34.skeleton} />
            </group>
          </group>
          <group name="trump_lp_model" />
        </group>
      </group>
    </group>
  </group>
</group>
</group> */}
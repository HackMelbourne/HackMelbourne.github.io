import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

import EarthDayMap from '../assets/textures/8k_earth_daymap.jpg';
import EarthNormalMap from '../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../assets/textures/8k_earth_clouds.jpg';

import { TextureLoader } from 'three';

export function Globe(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudsMap,
  ]);

  const earthRef = useRef();
  const cloudsRef = useRef();
  const glowRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
    glowRef.current.position.copy(earthRef.current.position);
  });

  return (
    <>
      <ambientLight intensity={1} />
      {/* <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} /> */}
      <mesh ref={cloudsRef} position={[0, 0, 0]}>
        <sphereGeometry args={[3, 100, 100]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[3, 100, 100]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} position={[0, 0, 0]} />
      </mesh>
      <pointLight ref={glowRef} color="#90d4e3" distance={100} intensity={3} position={[0, 0, -10]} />
    </>
  );
}

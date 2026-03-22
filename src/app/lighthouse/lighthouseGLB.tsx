"use client";
import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Lighthouse() {
  const lighthouseRef = useRef<THREE.Group>(null);
  const bulbRef = useRef<THREE.PointLight>(null);

  const { scene } = useGLTF("/lighthouse.glb");
  const lighthouseScene = useMemo(() => scene.clone(), [scene]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (lighthouseRef.current) {
      lighthouseRef.current.position.y = -5 + Math.sin(t * 0.4) * 0.15;
      lighthouseRef.current.rotation.z = Math.sin(t * 0.25) * 0.008;
    }

    if (bulbRef.current) {
      bulbRef.current.intensity = 80 + Math.sin(t * 12) * 8 + Math.sin(t * 40) * 3;
    }
  });

  return (
    <>
      <directionalLight
        position={[40, 80, 60]}
        intensity={3}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]} 
      />

      <directionalLight
        position={[-30, 40, -60]}
        intensity={3}
        color="#28daff"
      />

      <hemisphereLight args={["#ffffff", "#000000", 1]} />

      <group ref={lighthouseRef} position={[0, -6, 0]}>
        <primitive object={lighthouseScene} scale={0.55} />

        <group position={[1, 37, 0]}>
          <pointLight
            ref={bulbRef}
            intensity={60}
            distance={80}
            decay={2}
            color="#ffdca8"
          />

          <mesh position={[-1, -1, -4]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={10}
              toneMapped={false} 
            />
          </mesh>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/lighthouse.glb");
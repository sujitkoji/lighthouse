"use client";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Lightning({
  intensityMin = 4,
  intensityMax = 8,
  flashProbability = 1,  
  duration = 0.1,          
  position = [200, 120, 100] as [number, number, number],
}) {
  const lightRef = useRef<THREE.PointLight>(null);
  const timerRef = useRef(0);

  useFrame((state, delta) => {
    if (!lightRef.current) return;

    if (timerRef.current > 0) {
      timerRef.current -= delta;
      if (timerRef.current <= 0) {
        lightRef.current.intensity = 0;  
      }
      return;
    }

     if (Math.random() < flashProbability) {
      lightRef.current.intensity = THREE.MathUtils.randFloat(intensityMin, intensityMax);
      timerRef.current = duration;

       lightRef.current.position.set(
        position[0] + THREE.MathUtils.randFloatSpread(50),
        position[1] + THREE.MathUtils.randFloatSpread(20),
        position[2] + THREE.MathUtils.randFloatSpread(50)
      );
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={position}
      color="#ffffff"
      intensity={0}
      distance={500}
      decay={2}
      castShadow
    />
  );
}

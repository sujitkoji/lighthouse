"use client";
import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";

 const LIGHTHOUSE_POS = new THREE.Vector3(0, 0, 0);
const NO_CLOUD_RADIUS = 120;

 const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
const NORMAL_CLOUD_COUNT = isMobile ? 15 : 25;
const RAIN_CLOUD_COUNT = isMobile ? 3 : 6;


function getSafePosition(
  spreadX: number,
  minY: number,
  maxY: number,
  spreadZ: number
) {
  let pos: THREE.Vector3;
  do {
    pos = new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(spreadX),
      THREE.MathUtils.randFloat(minY, maxY),
      THREE.MathUtils.randFloatSpread(spreadZ)
    );
  } while (pos.distanceTo(LIGHTHOUSE_POS) < NO_CLOUD_RADIUS);
  return pos;
}
 
export default function MovingClouds() {
  const groupRef = useRef<THREE.Group>(null);
  const rainGroupRef = useRef<THREE.Group>(null);

   const clouds = useMemo(() => {
    return Array.from({ length: NORMAL_CLOUD_COUNT }).map(() => ({
      basePos: getSafePosition(600, 55, 120, 600),
      speed: THREE.MathUtils.randFloat(0.008, 0.02),
      scale: THREE.MathUtils.randFloat(10, 20),
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

   const rainClouds = useMemo(() => {
    return Array.from({ length: RAIN_CLOUD_COUNT }).map(() => ({
      basePos: getSafePosition(500, 22, 38, 500),
      speed: THREE.MathUtils.randFloat(0.004, 0.01),
      scale: THREE.MathUtils.randFloat(22, 35),
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

     if (groupRef.current) {
      groupRef.current.children.forEach((cloud, i) => {
        const c = clouds[i];
        if (!c) return;

        cloud.position.x = c.basePos.x + Math.sin(t * c.speed + c.phase) * 80;
        cloud.position.y = c.basePos.y + Math.sin(t * 0.25 + c.phase) * 2;
        cloud.position.z = c.basePos.z + Math.cos(t * c.speed * 0.6 + c.phase) * 40;
      });
    }

     if (rainGroupRef.current) {
      rainGroupRef.current.children.forEach((cloud, i) => {
        const c = rainClouds[i];
        if (!c) return;

        cloud.position.x = c.basePos.x + Math.sin(t * c.speed + c.phase) * 25;
        cloud.position.y = c.basePos.y + Math.sin(t * 0.2 + c.phase) * 1.5; 
        cloud.position.z = c.basePos.z + Math.cos(t * c.speed + c.phase) * 20;
      });
    }
  });

   return (
    <>
       <group ref={groupRef}>
        {clouds.map((c, i) => (
          <Cloud
            key={i}
            position={c.basePos}
            scale={c.scale}
            opacity={0.25}
            segments={isMobile ? 18 : 24}
            fade={180}
          />
        ))}
      </group>

       <group ref={rainGroupRef}>
        {rainClouds.map((c, i) => (
          <Cloud
            key={i}
            position={c.basePos}
            scale={c.scale}
            opacity={0.55}
            segments={4}
            color="#24262b"
            fade={70}
          />
        ))}
      </group>
    </>
  );
}

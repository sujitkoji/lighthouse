"use client";
import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Lighthouse() {
  const lighthouseRef = useRef<THREE.Group>(null);
  const beamRef = useRef<THREE.SpotLight>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  const { scene } = useGLTF("/lighthouse.glb");
  const lighthouseScene = useMemo(() => scene.clone(), [scene]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (lighthouseRef.current) {
      lighthouseRef.current.position.y = -5 + Math.sin(t * 0.4) * 0.1;
      lighthouseRef.current.rotation.z = Math.sin(t * 0.25) * 0.006;
    }

    // 🔥 very subtle warm flicker (natural)
    if (glowRef.current) {
      glowRef.current.intensity = 1.2 + Math.sin(t * 6.0) * 0.08;
    }

    if (beamRef.current) {
      beamRef.current.rotation.y = t * 0.55;
    }
  });

  return (
    <>


      {/* 🌙 SOFT MOON SKY LIGHT */}
      <directionalLight
        position={[-80, 120, 100]}
        intensity={0.45}
        color="#9fb7ff"
      />

      {/* 🌫 SKY + GROUND BOUNCE */}
      <hemisphereLight
        args={["#1e293b", "#020617", 0.35]}
      />

      {/* 🌑 LOW AMBIENT */}
      <ambientLight intensity={0.12} />


      {/* 🔥 LIGHTHOUSE WARM GLOW */}
      <pointLight
        ref={glowRef}
        position={[0, 14, 6]}
        intensity={1.2}
        distance={55}
        decay={2}
        color="#ffd8a8"
      />

      {/* 🔦 ROTATING BEAM (SOFTENED) */}
      <spotLight
        ref={beamRef}
        position={[0, 18, 0]}
        angle={0.17}
        penumbra={0.9}
        intensity={4.8}
        distance={220}
        color="#fff1cc"
      />

      {/* 🗼 LIGHTHOUSE */}
      <group
        ref={lighthouseRef}
        position={[0, -6, 0]}
        rotation={[0, 0, 0]}
      >
        <primitive object={lighthouseScene} scale={0.55} />
      </group>
    </>
  );
}

useGLTF.preload("/lighthouse.glb");

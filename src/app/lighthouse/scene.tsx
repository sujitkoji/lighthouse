"use client"
import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky, Stars, OrbitControls, Preload } from '@react-three/drei'
import Ocean from '@/app/lighthouse/ocean'
import MovingClouds from "@/app/lighthouse/MovingClouds";
import LightHouse from "@/app/lighthouse/lighthouseGLB"


export default function Scene() {
  return (

    <Canvas camera={{ position: [0, 8, 50], fov: 70 }}
      dpr={[1, 2]}
      style={{ width: "100vw", height: "100vh" }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
    >
      <color attach="background" args={["#000000"]} />

      <Sky
        sunPosition={[-100, 60, -400]}
        turbidity={0.6}
        rayleigh={0.3}
        mieCoefficient={0.5}
        mieDirectionalG={1}
      />

      <Stars
        radius={100}
        depth={50}
        count={800}
        factor={4}
        saturation={0}
        fade
      />

      <Suspense fallback={null}>
        <Ocean />
        <LightHouse />
        <MovingClouds />
        <Preload all />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        rotateSpeed={0.25}
        dampingFactor={0.08}
        enableDamping
      />
    </Canvas>
  )
}



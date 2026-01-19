"use client"
import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky, Stars, OrbitControls, Preload } from '@react-three/drei'
import Ocean from '@/app/lighthouse/ocean'
import MovingClouds from "@/app/lighthouse/MovingClouds";
import LightHouse from "@/app/lighthouse/lighthouseGLB"
import Lightning from "@/app/lighthouse/Lightning"



export default function Scene() {
  return (

    <Canvas camera={{ position: [0, 6, 60], fov: 75 }}
      style={{ width: "100vw", height: "100vh" }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
      dpr={[1, 2]}
    >
      <fog attach="fog" args={["#020617", 150, 900]} />
      <color attach="background" args={["#020617"]} />

      <pointLight decay={0} position={[100, 100, 100]} />
      <pointLight decay={0.05} position={[-100, -100, -100]} />

      <Sky
        sunPosition={[-100, -13, -400]}
        turbidity={10}
        rayleigh={1.3}
        mieCoefficient={0.07}
        mieDirectionalG={0.9}
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
        <Lightning/>
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



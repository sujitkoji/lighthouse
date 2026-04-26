"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Water } from "three-stdlib";

type WaterShader = {
  uniforms: {
    [key: string]: THREE.IUniform;
  };
  fragmentShader: string;
};

type WaterMaterialWithShader = THREE.ShaderMaterial & {
  userData: {
    shader?: WaterShader;
  };
};

export default function Ocean() {
  const groupRef = useRef<THREE.Group>(null);
  const waterRef = useRef<Water | null>(null);

  const waterNormals = useLoader(
    THREE.TextureLoader,
    "/waternormals.jpg"
  );

  const causticsTex = useLoader(
    THREE.TextureLoader,
    "/waterCaustics.png"
  );

  useEffect(() => {
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
    causticsTex.wrapS = causticsTex.wrapT = THREE.RepeatWrapping;

    const geometry = new THREE.PlaneGeometry(
      4000,
      4000,
      256,
      256
    );

    const water = new Water(geometry, {
      textureWidth: 1024,
      textureHeight: 1024,
      waterNormals,
      sunDirection: new THREE.Vector3(0.3, 1, 0.2),
      sunColor: 0x2c4c90,
      waterColor: 0x0a1a22,  
      distortionScale: 4.5,  
      fog: true,
    });

    water.rotation.x = -Math.PI / 2;
    water.position.y = -4;


    water.material.onBeforeCompile = (shader) => {
      const s = shader as WaterShader;

      s.uniforms.causticsMap = { value: causticsTex };
      s.uniforms.causticsTime = { value: 0 };

      s.fragmentShader = s.fragmentShader.replace(
        "#include <common>",
        `
        #include <common>
        uniform sampler2D causticsMap;
        uniform float causticsTime;
        `
      );

      s.fragmentShader = s.fragmentShader.replace(
        "#include <output_fragment>",
        `
        vec2 causticsUV = vUv * 5.0;
        causticsUV += vec2(
          sin(causticsTime * 0.15),
          cos(causticsTime * 0.12)
        );

        float caustics =
          texture2D(causticsMap, causticsUV).r *
          smoothstep(0.0, 0.8, vNormal.y);

        outgoingLight += caustics * 0.22;

        #include <output_fragment>
        `
      );

      const mat = water.material as WaterMaterialWithShader;
      mat.userData.shader = s;
    };

    waterRef.current = water;

const group = groupRef.current;
group?.add(water);

return () => {
  group?.remove(water);
  geometry.dispose();
};

  }, [waterNormals, causticsTex]);

  useFrame((state, delta) => {
    if (!waterRef.current) return;

    const t = state.clock.elapsedTime;

    waterRef.current.material.uniforms.time.value =
      t * 0.18;

    const mat = waterRef.current.material as WaterMaterialWithShader;
    const shader = mat.userData.shader;

    if (shader) {
      shader.uniforms.causticsTime.value += delta * 0.6;
    }
  });

  return <group ref={groupRef} />;
}

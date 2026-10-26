"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SceneLights() {
  const haloLightRef = useRef<THREE.PointLight>(null);
  const rimLightRef = useRef<THREE.SpotLight>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Subtle breathing pulse of the orange rim lights
    const pulse = Math.sin(time * 2.2) * 0.15 + 1;

    if (haloLightRef.current) {
      haloLightRef.current.intensity = 8.5 * pulse;
    }
    if (rimLightRef.current) {
      rimLightRef.current.intensity = 14 * pulse;
    }
  });

  return (
    <>
      {/* Deep warm ambient base */}
      <ambientLight color="#190602" intensity={1.8} />

      {/* Primary Fiery Halo Point Light (centered in the halo ring) */}
      <pointLight
        ref={haloLightRef}
        color="#FF5500"
        position={[1.5, 0.6, -0.6]}
        distance={9}
        decay={1.8}
        intensity={8.5}
      />

      {/* Dramatic Orange Rim Light hitting character silhouette */}
      <spotLight
        ref={rimLightRef}
        color="#FF7700"
        position={[2.8, 1.6, -1.4]}
        target-position={[0.9, -0.2, 0]}
        angle={0.7}
        penumbra={0.8}
        intensity={14}
        distance={12}
      />

      {/* Soft warm facial and chest fill */}
      <pointLight
        color="#FF8A24"
        position={[-0.8, 0.5, 1.8]}
        distance={6}
        intensity={1.2}
      />

      {/* Subtle complementary deep indigo backfill for cinematic shadow depth */}
      <directionalLight
        color="#08101C"
        position={[-3, -1, -2]}
        intensity={0.6}
      />
    </>
  );
}

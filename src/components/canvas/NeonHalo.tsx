"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NeonHaloProps {
  scrollProgress?: number;
}

export default function NeonHalo({ scrollProgress = 0 }: NeonHaloProps) {
  const haloGroupRef = useRef<THREE.Group>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const outerGlowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (haloGroupRef.current) {
      // Slow hypnotic rotation
      haloGroupRef.current.rotation.z = time * 0.12;
      haloGroupRef.current.rotation.x = Math.sin(time * 0.4) * 0.05;
      haloGroupRef.current.rotation.y = Math.cos(time * 0.3) * 0.08;

      // Parallax & scroll scale reaction
      const scaleFactor = 1 - scrollProgress * 0.3;
      haloGroupRef.current.scale.setScalar(Math.max(0.6, scaleFactor));
      haloGroupRef.current.position.y = 0.5 - scrollProgress * 1.5;
    }

    if (coreMeshRef.current) {
      const mat = coreMeshRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        // Pulsing emissive intensity
        mat.emissiveIntensity = 4.2 + Math.sin(time * 2.5) * 0.8;
      }
    }

    if (outerGlowRef.current) {
      const outerMat = outerGlowRef.current.material as THREE.MeshBasicMaterial;
      if (outerMat) {
        outerMat.opacity = 0.45 + Math.sin(time * 2.0) * 0.15;
      }
    }
  });

  return (
    <group ref={haloGroupRef} position={[1.35, 0.5, -0.6]}>
      {/* Primary Glowing Core Neon Ring */}
      <mesh ref={coreMeshRef}>
        <torusGeometry args={[1.9, 0.045, 32, 120]} />
        <meshStandardMaterial
          color="#FF6A00"
          emissive="#FF3A00"
          emissiveIntensity={4.5}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Atmospheric Aura Ring */}
      <mesh ref={outerGlowRef}>
        <torusGeometry args={[1.93, 0.02, 16, 90]} />
        <meshBasicMaterial
          color="#FFA520"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner Fiery Rim Accent */}
      <mesh>
        <torusGeometry args={[1.87, 0.015, 16, 90]} />
        <meshBasicMaterial
          color="#FFF0A0"
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Solar corona disc glow effect behind the ring */}
      <mesh position={[0, 0, -0.05]}>
        <ringGeometry args={[1.7, 2.3, 64]} />
        <meshBasicMaterial
          color="#FF3800"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

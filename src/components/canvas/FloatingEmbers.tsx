"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingEmbersProps {
  count?: number;
}

export default function FloatingEmbers({ count = 240 }: FloatingEmbersProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Initialize particle positions, velocities, scales and initial phases
  const [positions, phases, speeds, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    const sp = new Float32Array(count);
    const sc = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Spread across the 3D volume, denser around the right-hand character & halo
      pos[i * 3 + 0] = (Math.random() - 0.3) * 8; // X: -2.4 to 5.6
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6; // Y: -3 to 3
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5; // Z: -2.5 to 2.5

      ph[i] = Math.random() * Math.PI * 2;
      sp[i] = 0.3 + Math.random() * 0.7; // Vertical drift speed
      sc[i] = 0.03 + Math.random() * 0.08; // Particle scale
    }

    return [pos, ph, sp, sc];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;

      // Drift upward with turbulence
      array[idx + 1] += speeds[i] * delta * 0.9;
      // Slight horizontal sinusoidal wave
      array[idx + 0] += Math.sin(time * 0.8 + phases[i]) * 0.003;
      array[idx + 2] += Math.cos(time * 0.6 + phases[i]) * 0.002;

      // Loop particles back to bottom when they float above top bound
      if (array[idx + 1] > 3.8) {
        array[idx + 1] = -3.5;
        array[idx + 0] = (Math.random() - 0.3) * 8;
      }
    }

    posAttr.needsUpdate = true;
  });

  // Create smooth round glowing particle texture programmatically
  const emberTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.2, "rgba(255, 170, 30, 0.95)");
      grad.addColorStop(0.5, "rgba(255, 74, 10, 0.6)");
      grad.addColorStop(0.85, "rgba(200, 30, 0, 0.2)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        color="#FFA333"
        transparent
        opacity={0.85}
        map={emberTexture || undefined}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

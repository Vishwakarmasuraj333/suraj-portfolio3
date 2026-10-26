"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface FloatingCodeSymbolsProps {
  count?: number;
}

const SYMBOLS = ["</>", "{ }", "AI", "0101", "λ", "Py", "TS", "⚛", "=>", "async", "def", "const"];

export default function FloatingCodeSymbols({ count = 16 }: FloatingCodeSymbolsProps) {
  const groupRef = useRef<THREE.Group>(null);

  const items = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      text: SYMBOLS[i % SYMBOLS.length],
      x: 0.2 + (Math.random() - 0.2) * 3.8,
      y: -1.8 + Math.random() * 4.2,
      z: -0.6 + (Math.random() - 0.5) * 2.5,
      scale: 0.16 + Math.random() * 0.14,
      rotSpeed: (Math.random() - 0.5) * 0.5,
      driftSpeed: 0.3 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    groupRef.current.children.forEach((child, i) => {
      const item = items[i];
      if (!item) return;

      // Vertical drift with loop
      child.position.y += item.driftSpeed * delta * 0.4;
      if (child.position.y > 2.8) {
        child.position.y = -2.2;
      }

      // Sinusoidal floating wave
      child.position.x = item.x + Math.sin(time * 0.8 + item.phase) * 0.12;
      child.position.z = item.z + Math.cos(time * 0.6 + item.phase) * 0.08;
      child.rotation.y += item.rotSpeed * delta;
    });
  });

  return (
    <group ref={groupRef}>
      {items.map((item, idx) => (
        <group key={idx} position={[item.x, item.y, item.z]}>
          <Text
            fontSize={item.scale}
            color="#FF9D2E"
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_al061-VSE.woff"
          >
            {item.text}
            <meshBasicMaterial
              color="#FFA034"
              transparent
              opacity={0.8}
              blending={THREE.AdditiveBlending}
            />
          </Text>
        </group>
      ))}

      {/* Holographic Code Screen Plane in front of the developer */}
      <group position={[0.75, -0.15, 0.9]} rotation={[0.08, -0.32, 0.04]}>
        {/* Holographic Glowing Screen Frame */}
        <mesh>
          <planeGeometry args={[1.2, 0.85]} />
          <meshBasicMaterial
            color="#FF5A0A"
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Screen Border Glow */}
        <lineSegments>
          <edgesGeometry args={[new THREE.PlaneGeometry(1.2, 0.85)]} />
          <lineBasicMaterial color="#FF9D2E" transparent opacity={0.6} />
        </lineSegments>

        {/* Floating Hologram Code Lines */}
        <Text
          position={[-0.52, 0.32, 0.01]}
          fontSize={0.04}
          color="#FFA53A"
          anchorX="left"
          anchorY="top"
          maxWidth={1.05}
          lineHeight={1.4}
        >
          {`// SURAJ VISHWAKARMA // AI ENGINE\nimport { LLM, NeuralAgent } from "@ai/core";\nconst agent = new NeuralAgent({ model: "gemini-2.0" });\nawait agent.optimize({ fullstack: true });\n// System Status: 100% ONLINE`}
        </Text>
      </group>
    </group>
  );
}

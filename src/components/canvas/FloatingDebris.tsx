"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingDebrisProps {
  count?: number;
}

export default function FloatingDebris({ count = 38 }: FloatingDebrisProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Generate initial transforms and tumble velocities
  const debrisData = useMemo(() => {
    const dummy = new THREE.Object3D();
    const data = [];

    for (let i = 0; i < count; i++) {
      // Clustered around the right-hand hero character & halo ring
      const x = 0.5 + (Math.random() - 0.2) * 3.8;
      const y = (Math.random() - 0.5) * 4.2;
      const z = -0.8 + (Math.random() - 0.5) * 2.2;

      const scale = 0.04 + Math.random() * 0.12;

      const rotX = Math.random() * Math.PI * 2;
      const rotY = Math.random() * Math.PI * 2;
      const rotZ = Math.random() * Math.PI * 2;

      const speedRotX = (Math.random() - 0.5) * 0.8;
      const speedRotY = (Math.random() - 0.5) * 0.8;
      const speedRotZ = (Math.random() - 0.5) * 0.8;

      data.push({
        x,
        y,
        z,
        baseY: y,
        scale,
        rotX,
        rotY,
        rotZ,
        speedRotX,
        speedRotY,
        speedRotZ,
        phase: Math.random() * Math.PI * 2,
      });
    }

    return { dummy, data };
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const { dummy, data } = debrisData;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const item = data[i];

      // Subtle float motion
      item.y = item.baseY + Math.sin(time * 0.7 + item.phase) * 0.15;
      item.rotX += item.speedRotX * delta;
      item.rotY += item.speedRotY * delta;
      item.rotZ += item.speedRotZ * delta;

      dummy.position.set(item.x, item.y, item.z);
      dummy.rotation.set(item.rotX, item.rotY, item.rotZ);
      dummy.scale.setScalar(item.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      castShadow
      receiveShadow
    >
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#1f1410"
        roughness={0.45}
        metalness={0.8}
        emissive="#501602"
        emissiveIntensity={0.6}
      />
    </instancedMesh>
  );
}

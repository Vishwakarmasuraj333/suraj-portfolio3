"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

export type RenderMode = "cinematic-depth" | "pbr-mesh" | "wireframe";

interface Character3DProps {
  renderMode: RenderMode;
  scrollProgress?: number;
}

export default function Character3D({
  renderMode,
  scrollProgress = 0,
}: Character3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const scanRingRef = useRef<THREE.Mesh>(null);
  const headAuraRef = useRef<THREE.Group>(null);
  const rimBackingRef = useRef<THREE.Mesh>(null);
  const hologramScreenRef = useRef<THREE.Group>(null);

  // Load Suraj's 3D AI developer portrait texture
  const portraitTexture = useLoader(
    THREE.TextureLoader,
    "/assets/suraj-developer.jpg"
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // 1. Organic Multi-Axis Floating & Levitation Dynamics
    const floatY = Math.sin(time * 1.8) * 0.09;
    const floatX = Math.cos(time * 1.2) * 0.04;
    const tiltZ = Math.sin(time * 1.4) * 0.025;

    groupRef.current.position.y = -0.45 + floatY - scrollProgress * 1.3;
    groupRef.current.position.x = 1.15 + floatX;

    // 2. High-Responsiveness Pointer Parallax with Spring Damping
    const targetRotY = 0.08 + state.pointer.x * 0.28;
    const targetRotX = -0.06 - state.pointer.y * 0.16;
    const targetRotZ = tiltZ - state.pointer.x * 0.06;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.08
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.08
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetRotZ,
      0.08
    );

    // 3. Cybernetic Laser Scanner Wave moving vertically up and down
    if (scanRingRef.current) {
      scanRingRef.current.position.y = Math.sin(time * 2.2) * 1.2 + 0.45;
      const scanMat = scanRingRef.current.material as THREE.MeshBasicMaterial;
      if (scanMat) {
        scanMat.opacity = 0.4 + Math.sin(time * 4.4) * 0.2;
      }
    }

    // 4. Orbiting Neural Circuit Crown Halo over developer's head
    if (headAuraRef.current) {
      headAuraRef.current.rotation.z = time * 0.4;
      headAuraRef.current.rotation.x = 0.25 + Math.sin(time * 1.5) * 0.05;
    }

    // 5. Breathing Orange Rim Light Backing
    if (rimBackingRef.current) {
      const pulse = 1 + Math.sin(time * 3.0) * 0.06;
      rimBackingRef.current.scale.set(pulse, pulse, 1);
    }

    // 6. Holographic Code Floating Screen micro-levitation
    if (hologramScreenRef.current) {
      hologramScreenRef.current.position.y = 0.15 + Math.sin(time * 2.5) * 0.04;
      hologramScreenRef.current.rotation.y = -0.3 + Math.cos(time * 1.8) * 0.05;
    }
  });

  const isWireframe = renderMode === "wireframe";

  return (
    <group ref={groupRef} position={[1.15, -0.45, 0.4]}>
      {/* Dynamic Cyber Scanner Line slicing through the character */}
      <mesh ref={scanRingRef} position={[0, 0.45, 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.35, 1.45, 64]} />
        <meshBasicMaterial
          color="#FF5A0A"
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbiting Neural Circuit Ring above Developer's Head */}
      <group ref={headAuraRef} position={[0, 1.35, 0]}>
        <mesh>
          <torusGeometry args={[0.75, 0.015, 16, 64]} />
          <meshBasicMaterial
            color="#FF9D2E"
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <ringGeometry args={[0.55, 0.72, 32]} />
          <meshBasicMaterial
            color="#FF5A0A"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {renderMode === "cinematic-depth" ? (
        /* Ambient Volumetric 3D Glow Backing */
        <group position={[0, 0.45, -0.2]}>
          <mesh ref={rimBackingRef}>
            <circleGeometry args={[1.5, 32]} />
            <meshBasicMaterial
              color="#FF5A0A"
              transparent
              opacity={0.12}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ) : (
        /* Procedural 3D Sculpted Full-Stack AI Developer in Black Streetwear Hoodie */
        <group position={[0, 0, 0]}>
          {/* Main Torso / Hoodie Chest */}
          <mesh position={[0, -0.7, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.9, 1.25, 1.6, 24]} />
            <meshStandardMaterial
              color="#0d0b0b"
              roughness={0.82}
              metalness={0.12}
              wireframe={isWireframe}
            />
          </mesh>

          {/* Left Shoulder Sleeve */}
          <mesh position={[-0.95, -0.55, 0]} rotation={[0, 0, 0.35]} castShadow>
            <capsuleGeometry args={[0.38, 0.8, 12, 16]} />
            <meshStandardMaterial
              color="#0c0909"
              roughness={0.85}
              metalness={0.1}
              wireframe={isWireframe}
            />
          </mesh>

          {/* Right Shoulder Sleeve */}
          <mesh position={[0.95, -0.55, 0]} rotation={[0, 0, -0.35]} castShadow>
            <capsuleGeometry args={[0.38, 0.8, 12, 16]} />
            <meshStandardMaterial
              color="#0c0909"
              roughness={0.85}
              metalness={0.1}
              wireframe={isWireframe}
            />
          </mesh>

          {/* Hoodie Collar / Neck Fabric */}
          <mesh position={[0, 0.05, 0.05]} rotation={[0.2, 0, 0]} castShadow>
            <torusGeometry args={[0.42, 0.18, 16, 32]} />
            <meshStandardMaterial
              color="#0a0808"
              roughness={0.9}
              wireframe={isWireframe}
            />
          </mesh>

          {/* Hoodie Drawstrings with Fiery Glow */}
          <mesh position={[-0.15, -0.3, 0.35]} rotation={[0.1, 0, 0]}>
            <cylinderGeometry args={[0.018, 0.018, 0.55, 8]} />
            <meshStandardMaterial color="#FF5A0A" emissive="#FF5A0A" emissiveIntensity={0.8} wireframe={isWireframe} />
          </mesh>
          <mesh position={[0.15, -0.32, 0.36]} rotation={[0.08, 0, 0]}>
            <cylinderGeometry args={[0.018, 0.018, 0.58, 8]} />
            <meshStandardMaterial color="#FF5A0A" emissive="#FF5A0A" emissiveIntensity={0.8} wireframe={isWireframe} />
          </mesh>

          {/* Developer Laptop on Workstation */}
          <group position={[-0.1, -0.85, 0.7]} rotation={[-0.15, 0.2, 0]}>
            {/* Laptop Base */}
            <mesh castShadow>
              <boxGeometry args={[0.85, 0.03, 0.55]} />
              <meshStandardMaterial color="#252528" metalness={0.85} roughness={0.2} />
            </mesh>
            {/* Laptop Screen with Orange Code Glow */}
            <group position={[0, 0.28, -0.25]} rotation={[-0.35, 0, 0]}>
              <mesh>
                <boxGeometry args={[0.85, 0.55, 0.02]} />
                <meshStandardMaterial color="#18181b" metalness={0.9} roughness={0.15} />
              </mesh>
              {/* Glowing Code Screen Display */}
              <mesh position={[0, 0, 0.015]}>
                <planeGeometry args={[0.8, 0.5]} />
                <meshBasicMaterial color="#FF5A0A" transparent opacity={0.85} />
              </mesh>
            </group>
          </group>

          {/* Developer Head & Neck Looking towards Screen */}
          <group position={[0, 0.3, 0]} rotation={[-0.15, -0.28, 0.08]}>
            <mesh position={[0, 0.1, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.24, 0.45, 16]} />
              <meshStandardMaterial
                color="#b88362"
                roughness={0.55}
                metalness={0.05}
                wireframe={isWireframe}
              />
            </mesh>

            <mesh position={[0, 0.35, 0.08]} rotation={[0.2, 0, 0]} castShadow>
              <boxGeometry args={[0.34, 0.26, 0.38]} />
              <meshStandardMaterial
                color="#a67252"
                roughness={0.5}
                metalness={0.05}
                wireframe={isWireframe}
              />
            </mesh>

            <mesh position={[0, 0.52, 0]} castShadow>
              <sphereGeometry args={[0.34, 24, 24]} />
              <meshStandardMaterial
                color="#b07b5a"
                roughness={0.5}
                wireframe={isWireframe}
              />
            </mesh>

            {/* Hair */}
            <mesh position={[0, 0.65, -0.05]} rotation={[-0.2, 0, 0]}>
              <sphereGeometry args={[0.35, 18, 18]} />
              <meshStandardMaterial
                color="#141010"
                roughness={0.9}
                wireframe={isWireframe}
              />
            </mesh>
          </group>
        </group>
      )}
    </group>
  );
}

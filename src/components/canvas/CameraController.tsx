"use client";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraControllerProps {
  scrollProgress: number;
}

export default function CameraController({
  scrollProgress,
}: CameraControllerProps) {
  const { camera, size } = useThree();

  const isMobile = size.width < 768;

  useFrame((state) => {
    // Mouse coords normalized (-1 to 1)
    const px = state.pointer.x;
    const py = state.pointer.y;

    // Mobile has reduced parallax movement for performance and usability
    const mouseIntensityX = isMobile ? 0.15 : 0.4;
    const mouseIntensityY = isMobile ? 0.08 : 0.22;

    // Scroll interpolation: pulls back and lifts camera as user scrolls into lower sections
    const targetZ = (isMobile ? 6.2 : 5.0) + scrollProgress * 3.0;
    const targetY = (isMobile ? 0.2 : 0.0) + py * mouseIntensityY + scrollProgress * 1.5;
    const targetX = (isMobile ? 0.4 : 0.0) + px * mouseIntensityX - scrollProgress * 0.8;

    // Smooth lerp camera translation
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);

    // Look at point: slightly off-center towards character
    const lookAtX = isMobile ? 0.3 : 0.6;
    const lookAtY = isMobile ? -0.2 : -0.1;
    camera.lookAt(lookAtX, lookAtY, 0);
  });

  return null;
}

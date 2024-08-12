import { useEffect, useRef, useState } from "react";
import { easing } from "maath";
import { Environment, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ErrorBoundary } from "react-error-boundary";

import { Model } from "../models/Model.model";

import "../../styles/containers/appCanvas.container.scss";

const CAMERA_SPEED_X = 5000;
const CAMERA_SPEED_Y = 7000;

export default function AppCanvas() {
  const [error, setError] = useState(false);

  return error ? null : (
    <div className="three-canvas">
      <Canvas dpr={[1, 2]} shadows onError={() => setError(true)}>
        <ErrorBoundary
          fallback={
            <mesh>
              <sphereGeometry />
            </mesh>
          }
        >
          <CameraRig>
            <Lights />
            <Model />
          </CameraRig>
        </ErrorBoundary>
      </Canvas>
    </div>
  );
}

function Lights() {
  return (
    <>
      <Sky rayleigh={0.5} azimuth={100} distance={1000} />
      <Environment preset="sunset" environmentIntensity={0.5} />
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.5} decay={2} position={[-2, 0, 2]} />
      <pointLight intensity={1} decay={2} position={[-2, 6, 2]} />
      <pointLight intensity={2} decay={2} position={[1, 0, 2]} castShadow />
    </>
  );
}

function CameraRig({ children }: { children: React.ReactNode }) {
  const cameraRef = useRef<any>();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((_, delta) => {
    easing.dampE(
      cameraRef.current.rotation,
      [mousePosition.y / CAMERA_SPEED_Y, -mousePosition.x / CAMERA_SPEED_X, 0],
      0.5,
      delta
    );
  });

  return (
    <group position={[-0.15, 0, 3.5]} ref={cameraRef}>
      {children}
    </group>
  );
}

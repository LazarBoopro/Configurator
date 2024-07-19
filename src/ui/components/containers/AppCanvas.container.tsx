import { useEffect, useRef, useState } from "react";
import { easing } from "maath";
import { Center, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ErrorBoundary } from "react-error-boundary";

import Scene from "../models/Scene.model";

import "../../styles/containers/appCanvas.container.scss";

const CAMERA_SPEED_X = 5000;
const CAMERA_SPEED_Y = 7000;

export default function AppCanvas() {
  const [error, setError] = useState(false);

  return error ? null : (
    <div className="three-canvas">
      <Canvas onError={() => setError(true)}>
        <Lights />
        <ErrorBoundary
          fallback={
            <mesh>
              <sphereGeometry />
            </mesh>
          }
        >
          <CameraRig>
            <Center>
              <Scene />
            </Center>
          </CameraRig>

          <boxGeometry />
        </ErrorBoundary>
      </Canvas>
    </div>
  );
}

function Lights() {
  return (
    <>
      <Sky
        azimuth={0}
        sunPosition={1}
        rayleigh={0.25}
        inclination={0.6}
        distance={500}
      />

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, -10]} />
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
    <group position={[-1.5, 2, 0]} ref={cameraRef}>
      {children}
    </group>
  );
}

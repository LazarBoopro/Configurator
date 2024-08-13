import React, { Suspense, useEffect, useRef, useState } from "react";
import { easing } from "maath";
import {
  Center,
  Environment,
  MeshReflectorMaterial,
  Sky,
  Stage,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { ErrorBoundary } from "react-error-boundary";

import { useValues } from "../../../context/FormValuesContext";

const Model1 = React.lazy(() => import("../models/Model.model"));
const Model = React.lazy(() => import("../models/Model2.model"));

import "../../styles/containers/appCanvas.container.scss";

const CAMERA_SPEED_X = 5000;
const CAMERA_SPEED_Y = 7000;

export default function AppCanvas() {
  const { scene } = useValues();

  return (
    <div className="three-canvas">
      {scene === 0 ? <StageModel /> : <SceneModel />}
    </div>
  );
}

function Lights() {
  return (
    <>
      <Sky rayleigh={0.3} azimuth={100} distance={100} />
      <Environment preset="city" blur={1} environmentIntensity={0.5} />
      {/* <ambientLight intensity={0.5} /> */}
      <pointLight intensity={2} decay={2} position={[-2, 0, 2]} />
      <pointLight intensity={5} decay={3} position={[-0.5, 0.2, 3.5]} />
      <pointLight intensity={1} decay={2} position={[0.4, 1, 1.5]} />
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

const StageModel = () => {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      <color attach={"background"} args={["#fff"]} />
      <fog attach={"fog"} args={["#fff", 0, 30]} />

      <Suspense fallback={null}>
        <CameraRig>
          <pointLight
            intensity={0.05}
            decay={2}
            color={"white"}
            position={[0.5, 0.5, 0.5]}
          />
          <pointLight
            intensity={1}
            decay={0}
            color={"white"}
            position={[0.25, 0.5, 0.5]}
          />
          <pointLight intensity={0.5} decay={2} position={[1, 0, 2]} />
          <Stage
            shadows
            adjustCamera
            intensity={0.5}
            environment="city"
            preset="portrait"
          >
            <Center position={[-0.05, 0, 0]}>
              <Model />
            </Center>
          </Stage>
          <mesh position={[0, -0.42, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[500, 500]} />
            <MeshReflectorMaterial
              mirror={1}
              blur={[200, 200]}
              mixBlur={0.5}
              mixStrength={8}
              roughness={0.5}
              depthScale={1}
              minDepthThreshold={0.2}
              maxDepthThreshold={2}
              color={"#fff"}
              metalness={0}
            />
          </mesh>
        </CameraRig>
      </Suspense>
    </Canvas>
  );
};

const SceneModel = () => {
  return (
    <Canvas dpr={[1, 2]} shadows>
      <ErrorBoundary
        fallback={
          <mesh>
            <sphereGeometry />
          </mesh>
        }
      >
        <CameraRig>
          <Lights />
          <Model1 scale={0.75} position={[0, -0.2, 0.8]} />
        </CameraRig>
      </ErrorBoundary>
    </Canvas>
  );
};

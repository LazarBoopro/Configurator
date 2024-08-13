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
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
      >
        {scene === 0 ? (
          <Suspense fallback={null}>
            <StageModel />
          </Suspense>
        ) : (
          <Suspense fallback={null}>
            <SceneModel />
          </Suspense>
        )}
      </Canvas>
    </div>
  );
}

function Lights() {
  const { scene } = useValues();
  return scene === 1 ? (
    <>
      <Environment preset="apartment" environmentIntensity={0.15} />
      <ambientLight intensity={0.25} />
      <Sky rayleigh={0.3} azimuth={100} distance={100} />
      <pointLight intensity={0.25} decay={2} position={[-1.5, 0.25, 1]} />
      <pointLight intensity={0.25} decay={2} position={[-0.5, 0.2, 1]} />
      <pointLight intensity={8} decay={2} position={[1.4, 1, 1.5]} />
    </>
  ) : (
    <>
      <pointLight
        intensity={0.05}
        decay={2}
        color={"white"}
        position={[0.5, 0.5, 0.5]}
      />
      <pointLight
        intensity={20}
        decay={0}
        color={"white"}
        position={[0, 0, 0]}
      />
      <pointLight intensity={0.5} decay={2} position={[1, 0, 2]} />
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
    <>
      <color attach={"background"} args={["#fff"]} />
      <fog attach={"fog"} args={["#fff", 0, 30]} />

      <Suspense fallback={null}>
        <CameraRig>
          <Stage
            shadows
            adjustCamera
            intensity={5}
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
    </>
  );
};

const SceneModel = () => {
  return (
    <CameraRig>
      <Lights />

      <Model1 position={[0, -0.45, 0]} />
    </CameraRig>
  );
};

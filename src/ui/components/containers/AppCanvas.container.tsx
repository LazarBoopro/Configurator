import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import CanvasCursor from "../atoms/CanvasCursor.atom";
import Scene from "../moleculs/Scene.molecul";
import Camera from "../atoms/Camera.atom";
import Lights from "../atoms/Lights.atom";

import { useValues } from "../../../context/FormValuesContext";

import "../../styles/containers/appCanvas.container.scss";

export default function AppCanvas() {
  const { scene } = useValues();
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={canvasRef} className="three-canvas">
      <CanvasCursor canvasRef={canvasRef} />
      <Suspense>
        <Canvas
          gl={{
            toneMappingExposure: 1.2,
            toneMapping: THREE.ACESFilmicToneMapping,
          }}
          shadows
          camera={{
            fov: 30,
          }}
        >
          <Lights />
          <Camera />
          <Scene />
          <OrbitControls
            enableDamping={true}
            dampingFactor={0.02}
            rotateSpeed={0.2}
            enableZoom={false}
            enablePan={false}
            minPolarAngle={scene === 0 ? Math.PI / 4 : Math.PI / 2.5}
            maxPolarAngle={scene === 0 ? Math.PI / 2 : Math.PI / 2}
            minAzimuthAngle={scene === 0 ? -Math.PI / 4 : -Math.PI / 8}
            maxAzimuthAngle={scene === 0 ? Math.PI / 4 : Math.PI / 8}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}

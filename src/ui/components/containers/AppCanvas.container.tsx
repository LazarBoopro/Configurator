import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Scene from "../moleculs/Scene.molecul";
import Camera from "../atoms/Camera.atom";
import Lights from "../atoms/Lights.atom";

import { useValues } from "../../../context/FormValuesContext";

import "../../styles/containers/appCanvas.container.scss";

export default function AppCanvas() {
  const { scene } = useValues();

  return (
    <div className="three-canvas">
      <Canvas
        gl={{
          toneMappingExposure: 1,
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: "srgb",
        }}
        shadows
        camera={{
          position: [0, 0, 5],
          fov: scene === 0 ? 30 : 10,
          zoom: scene === 0 ? 50 : 100,
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
    </div>
  );
}

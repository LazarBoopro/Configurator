import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import CanvasCursor from "../atoms/CanvasCursor.atom";
import Scene from "../moleculs/Scene.molecul";
import Camera from "../atoms/Camera.atom";
import Lights from "../atoms/Lights.atom";

import "../../styles/containers/appCanvas.container.scss";

export default function AppCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={canvasRef} className="three-canvas">
      <CanvasCursor canvasRef={canvasRef} />
      <Suspense>
        <Canvas
          shadows
          camera={{
            fov: 30,
          }}
        >
          <Lights />
          <Camera />
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}

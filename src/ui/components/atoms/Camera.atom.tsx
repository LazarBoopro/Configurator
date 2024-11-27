import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { useValues } from "../../../context/FormValuesContext";
import { OrbitControls } from "@react-three/drei";

export default function Camera() {
  const { camera } = useThree();
  const { scene } = useValues();

  useLayoutEffect(() => {
    camera.position.set(-Math.PI / 1.5, Math.PI / 2, 4);
    camera.zoom = scene === 0 ? 1.2 : 1.3;
    camera.updateProjectionMatrix();
  }, [camera, scene]);

  return (
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
  );
}

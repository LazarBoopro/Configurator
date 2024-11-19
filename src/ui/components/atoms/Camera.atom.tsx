import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { useValues } from "../../../context/FormValuesContext";

export default function Camera() {
  const { camera } = useThree();
  const { scene } = useValues();

  useLayoutEffect(() => {
    camera.position.set(-Math.PI / 1.5, Math.PI / 2, 4);
    camera.zoom = scene === 0 ? 1.2 : 1.3;
    camera.updateProjectionMatrix();
  }, [camera, scene]);

  return null;
}

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useValues } from "../../../context/FormValuesContext";

export default function Camera() {
  const { camera } = useThree();
  const { scene } = useValues();

  useEffect(() => {
    camera.zoom = scene === 0 ? 1.2 : 1.3;
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, scene]);

  return null;
}

import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { useValues } from "../../../context/FormValuesContext";

export default function Lights() {
  const { values } = useValues();

  const directionalLightRef: any = useRef();
  const spotLightRef: any = useRef();

  // **_LIGHTS DEBUGGING_**
  //   useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);
  //   useHelper(spotLightRef, THREE.SpotLightHelper, 1);

  return (
    <>
      <Environment
        preset="apartment"
        environmentIntensity={values.wall === "wood_1" ? 0.5 : 0.2}
      />
      <directionalLight
        ref={directionalLightRef}
        position={[20, 10, 20]}
        intensity={values.wall === "wood_1" ? 0 : 1}
        receiveShadow
        castShadow
        color="#FFDFBA"
        shadow-mapSize={[256, 256]}
      />
      <directionalLight
        ref={directionalLightRef}
        position={[30, 10, 30]}
        intensity={values.wall === "wood_1" ? 0.2 : 2}
        castShadow
        receiveShadow
        color="#FFDFBA"
        shadow-mapSize={[256, 256]}
      />
      <spotLight
        ref={spotLightRef}
        position={[-2, 0, 5]}
        intensity={values.wall === "wood_1" ? 1 : 2}
        color="#FFDFBA"
        angle={Math.PI / 2}
        castShadow
        receiveShadow
      />
    </>
  );
}

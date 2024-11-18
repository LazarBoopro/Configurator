import { Environment } from "@react-three/drei";
import { useRef } from "react";

export default function Lights() {
  const directionalLightRef: any = useRef();
  const spotLightRef: any = useRef();

  //   useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);
  //   useHelper(spotLightRef, THREE.SpotLightHelper, 1);

  return (
    <>
      <Environment preset="apartment" environmentIntensity={0.1} />
      <directionalLight
        ref={directionalLightRef}
        position={[20, 10, 20]}
        intensity={1}
        castShadow
        color="#FFDFBA"
        shadow-mapSize={[256, 256]}
      />
      <directionalLight
        ref={directionalLightRef}
        position={[20, -5, 30]}
        intensity={1}
        castShadow
        color="#FFDFBA"
        shadow-mapSize={[256, 256]}
      />
      <spotLight
        ref={spotLightRef}
        position={[-2, 0, 5]}
        intensity={1}
        color="#FFDFBA"
        angle={Math.PI / 2}
        castShadow
        receiveShadow
      />
    </>
  );
}

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

import background from "../../../../public/images/background.jpg";

export default function Dome() {
  const texture: any = useLoader(THREE.TextureLoader, background);

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  texture.offset.set(0.5, 0.5);

  return (
    <>
      <mesh>
        <sphereGeometry attach="geometry" args={[50, 60, 40]} />
        <meshBasicMaterial
          attach="material"
          map={texture}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  );
}

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import useTextures from "../../hooks/useTextures.hook";

type GLTFResult = GLTF & {
  nodes: {
    Zid: THREE.Mesh;
    Floor: THREE.Mesh;
    Stub009: THREE.Mesh;
    Stub008: THREE.Mesh;
    Zid001: THREE.Mesh;
    Stub001: THREE.Mesh;
    Stub002: THREE.Mesh;
    Zid002: THREE.Mesh;
    Zid003: THREE.Mesh;
    Stub003: THREE.Mesh;
    Stub004: THREE.Mesh;
    Stub005: THREE.Mesh;
    Stub006: THREE.Mesh;
    Zid004: THREE.Mesh;
    Stub007: THREE.Mesh;
    Stub010: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/fenceFinal.glb") as GLTFResult;

  const { selectedTexturePillar, selectedTextureWall, floor } = useTextures();

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zid.geometry}
        material={materials.Material}
        position={[1.7078, -0.0205, 0]}
        scale={[0.6731, 1, 0.3956]}
      >
        <meshStandardMaterial roughness={0.5} {...selectedTextureWall} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor.geometry}
        material={nodes.Floor.material}
        position={[0, -0.4221, 0.9048]}
        scale={[3.5714, 1, 1.2968]}
      >
        <meshStandardMaterial {...floor} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub009.geometry}
        material={materials["Material.018"]}
        position={[2.3991, 0.0167, 0]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub008.geometry}
        material={materials["Material.017"]}
        position={[1.7096, 0.4024, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.2897, 1.5088, 0.4828]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zid001.geometry}
        material={materials["Material.006"]}
        position={[0.2922, -0.0205, 0]}
        scale={[0.6731, 1, 0.3956]}
      >
        <meshStandardMaterial roughness={0.5} {...selectedTextureWall} />
      </mesh>
      {/* ORIGINAl PILL */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub001.geometry}
        material={materials["Material.007"]}
        position={[0.9835, 0.0167, 0]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub002.geometry}
        material={materials["Material.008"]}
        position={[0.294, 0.4024, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.2897, 1.5088, 0.4828]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zid002.geometry}
        material={materials["Material.009"]}
        position={[-2.5136, -0.0205, 0]}
        scale={[0.6731, 1, 0.3956]}
      >
        <meshStandardMaterial roughness={0.5} {...selectedTextureWall} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zid003.geometry}
        material={materials["Material.010"]}
        position={[-1.0981, -0.0205, 0]}
        scale={[0.6731, 1, 0.3956]}
      >
        <meshStandardMaterial roughness={0.5} {...selectedTextureWall} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub003.geometry}
        material={materials["Material.011"]}
        position={[-0.4068, 0.0167, 0]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub004.geometry}
        material={materials["Material.012"]}
        position={[-1.0962, 0.4024, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.2897, 1.5088, 0.4828]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub005.geometry}
        material={materials["Material.013"]}
        position={[-2.5118, 0.4024, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.2897, 1.5088, 0.4828]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub006.geometry}
        material={materials["Material.014"]}
        position={[-1.8223, 0.0167, 0]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zid004.geometry}
        material={materials["Material.015"]}
        position={[3.0493, -0.0205, 0]}
        scale={[0.6731, 1, 0.3956]}
      >
        <meshStandardMaterial roughness={0.5} {...selectedTextureWall} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub007.geometry}
        material={materials["Material.016"]}
        position={[3.7405, 0.0167, 0]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stub010.geometry}
        material={materials["Material.019"]}
        position={[3.0511, 0.4024, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.2897, 1.5088, 0.4828]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/fenceFinal.glb");

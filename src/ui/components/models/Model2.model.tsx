import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import useTextures from "../../hooks/useTextures.hook";

type GLTFResult = GLTF & {
  nodes: {
    Zid: THREE.Mesh;
    LeviStub: THREE.Mesh;
    LeviStubCap: THREE.Mesh;
    DesniStubCap: THREE.Mesh;
    DesniStub: THREE.Mesh;
    Vrh: THREE.Mesh;
    postolje: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/fenceStageScenev2.1.glb"
  ) as GLTFResult;

  const { selectedTexturePillar, selectedTextureWall } = useTextures();

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zid.geometry}
        material={materials.Material}
        position={[0.002, 0.415, 0]}
        scale={[1, 1, 3]}
      >
        <meshStandardMaterial
          roughness={0.5}
          side={THREE.DoubleSide}
          metalness={0}
          {...selectedTextureWall}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeviStub.geometry}
        material={materials.Material}
        position={[-0.516, 0.432, 0]}
      >
        <meshStandardMaterial
          roughness={5}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeviStubCap.geometry}
        material={materials.Material}
        position={[-0.516, 0.432, 0]}
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
        geometry={nodes.DesniStubCap.geometry}
        material={materials.Material}
        position={[0.512, 0.432, 0]}
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
        geometry={nodes.DesniStub.geometry}
        material={materials.Material}
        position={[0.512, 0.432, 0]}
      >
        <meshStandardMaterial
          roughness={13}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vrh.geometry}
        material={materials.Material}
        position={[0, 0.8, 0]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0.25}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.postolje.geometry}
        material={materials.Material}
        position={[0, 0.006, 0]}
      >
        <meshStandardMaterial
          roughness={4}
          metalness={0.25}
          {...selectedTexturePillar}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/fenceStageScenev2.1.glb");

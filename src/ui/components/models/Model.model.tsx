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
    Zid001: THREE.Mesh;
    Vrh001: THREE.Mesh;
    postolje001: THREE.Mesh;
    LeviStubCap001: THREE.Mesh;
    LeviStub001: THREE.Mesh;
    Zid002: THREE.Mesh;
    Vrh002: THREE.Mesh;
    postolje002: THREE.Mesh;
    LeviStubCap002: THREE.Mesh;
    LeviStub002: THREE.Mesh;
    Zid003: THREE.Mesh;
    Vrh003: THREE.Mesh;
    postolje003: THREE.Mesh;
    LeviStubCap003: THREE.Mesh;
    LeviStub003: THREE.Mesh;
    Plane: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export default function Model1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/fenceWidthFloor.glb"
  ) as GLTFResult;

  const { selectedTexturePillar, selectedTextureWall, floor } = useTextures();

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Zid.geometry}
        material={materials.Material}
        position={[1.549, 0.415, 0]}
        scale={[1, 1, 2.376]}
      >
        <meshStandardMaterial
          roughness={1}
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
        position={[1.03, 0.432, 0]}
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
        geometry={nodes.LeviStubCap.geometry}
        material={materials.Material}
        position={[1.03, 0.432, 0]}
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
        position={[2.059, 0.432, 0]}
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
        position={[2.059, 0.432, 0]}
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
        geometry={nodes.Vrh.geometry}
        material={materials.Material}
        position={[1.547, 0.8, 0]}
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
        geometry={nodes.postolje.geometry}
        material={materials.Material}
        position={[1.547, 0.006, 0]}
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
        material={materials["Material.001"]}
        position={[0.523, 0.415, 0]}
        scale={[1, 1, 2.376]}
      >
        <meshStandardMaterial
          roughness={1}
          side={THREE.DoubleSide}
          metalness={0}
          {...selectedTextureWall}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vrh001.geometry}
        material={materials["Material.001"]}
        position={[0.521, 0.8, 0]}
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
        geometry={nodes.postolje001.geometry}
        material={materials["Material.001"]}
        position={[0.521, 0.006, 0]}
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
        geometry={nodes.LeviStubCap001.geometry}
        material={materials["Material.001"]}
        position={[0.005, 0.432, 0]}
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
        geometry={nodes.LeviStub001.geometry}
        material={materials["Material.001"]}
        position={[0.005, 0.432, 0]}
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
        material={materials["Material.002"]}
        position={[-0.522, 0.415, 0]}
        scale={[1, 1, 2.376]}
      >
        <meshStandardMaterial
          roughness={1}
          side={THREE.DoubleSide}
          metalness={0}
          {...selectedTextureWall}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vrh002.geometry}
        material={materials["Material.002"]}
        position={[-0.521, 0.8, 0]}
      >
        <meshStandardMaterial
          roughness={4}
          side={THREE.DoubleSide}
          metalness={0}
          {...selectedTexturePillar}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.postolje002.geometry}
        material={materials["Material.002"]}
        position={[-0.524, 0.006, 0]}
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
        geometry={nodes.LeviStubCap002.geometry}
        material={materials["Material.002"]}
        position={[-1.04, 0.432, 0]}
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
        geometry={nodes.LeviStub002.geometry}
        material={materials["Material.002"]}
        position={[-1.04, 0.432, 0]}
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
        geometry={nodes.Zid003.geometry}
        material={materials["Material.003"]}
        position={[-1.56, 0.415, 0]}
        scale={[1, 1, 2.376]}
      >
        <meshStandardMaterial
          roughness={1}
          side={THREE.DoubleSide}
          metalness={0}
          {...selectedTextureWall}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vrh003.geometry}
        material={materials["Material.003"]}
        position={[-1.563, 0.8, 0]}
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
        geometry={nodes.postolje003.geometry}
        material={materials["Material.003"]}
        position={[-1.563, 0.006, 0]}
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
        geometry={nodes.LeviStubCap003.geometry}
        material={materials["Material.003"]}
        position={[-2.079, 0.432, 0]}
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
        geometry={nodes.LeviStub003.geometry}
        material={materials["Material.003"]}
        position={[-2.079, 0.432, 0]}
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
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[0.015, -0.012, 0.518]}
        scale={[2.972, 1, 0.945]}
      >
        <meshStandardMaterial roughness={4} metalness={0} {...floor} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/fenceWidthFloor.glb");

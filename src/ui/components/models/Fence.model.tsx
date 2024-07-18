import { useGLTF } from "@react-three/drei";

export default function Fence(props: any) {
  const { nodes, materials } = useGLTF("/models/fence.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.357, 0]}>
        <mesh
          castShadow
          // {/* @ts-ignore */}
          geometry={nodes.Cube_1.geometry}
          material={materials["Wood.001"]}
        />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Concrete} />
      </group>
      <mesh
        castShadow
        // {/* @ts-ignore */}
        geometry={nodes.Plane.geometry}
        material={materials.Grass}
        position={[7.362, -0.129, 0]}
        rotation={[0, 0, -Math.PI]}
        scale={[-16.048, -2.3, -11.442]}
      />
    </group>
  );
}

useGLTF.preload("/models/fence.gltf");

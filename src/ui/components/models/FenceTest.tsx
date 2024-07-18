import { useGLTF } from "@react-three/drei";

export default function FenceTest(props: any) {
  const { nodes, materials } = useGLTF("/models/fenceTest.gltf");

  return (
    <group {...props} dispose={null}>
      <group position={[-6, 0, 0]}>
        <mesh
          // @ts-ignore
          geometry={nodes.Cube_1.geometry}
          material={materials["Wood.001"]}
        />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Concrete} />
      </group>
      <group position={[0, 0, 0]}>
        <mesh
          // @ts-ignore
          geometry={nodes.Cube_1.geometry}
          material={materials["Wood.001"]}
        />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Concrete} />
      </group>
      <group position={[6, 0, 0]}>
        <mesh
          // @ts-ignore
          geometry={nodes.Cube_1.geometry}
          material={materials["Wood.001"]}
        />
        {/* @ts-ignore */}
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Concrete} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/fenceTest.gltf");

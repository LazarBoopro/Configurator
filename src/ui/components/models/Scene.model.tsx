import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useValues } from "../../../context/FormValuesContext";

export default function Scene(props: any) {
  const { values } = useValues();

  const { nodes, materials } = useGLTF("/models/scene2Optimized.gltf");

  return (
    <group {...props} dispose={null}>
      <Lights />
      <group position={[0, 1.357, 0]}>
        <mesh
          // @ts-ignore
          geometry={nodes.Cube_1.geometry}
          material={materials[values.wall.texture ?? "Wood.003"]}
        />
        <mesh
          // @ts-ignore
          geometry={nodes.Cube_2.geometry}
          material={materials[values.pillars.texture ?? "Plaster 17"]}
        />
      </group>
      <group
        position={[0.719, -0.122, -3.377]}
        rotation={[Math.PI, -1.117, Math.PI]}
        scale={0.008}
      >
        {/* @ts-ignore */}
        <mesh geometry={nodes.Mesh011.geometry} material={materials.Trunk_01} />
        <mesh
          // @ts-ignore
          geometry={nodes.Mesh011_1.geometry}
          material={materials.Petiole_01}
        />
        <mesh
          //  @ts-ignore
          geometry={nodes.Mesh011_2.geometry}
          material={materials.Leaf_01}
        />
      </group>
      <group
        position={[9.219, -0.122, -3.377]}
        rotation={[0, 1.34, 0]}
        scale={0.008}
      >
        <mesh
          //  @ts-ignore
          geometry={nodes.Mesh001.geometry}
          material={materials["Trunk_01.001"]}
        />
        <mesh
          //  @ts-ignore
          geometry={nodes.Mesh001_1.geometry}
          material={materials["Petiole_01.001"]}
        />
        <mesh
          //  @ts-ignore
          geometry={nodes.Mesh001_2.geometry}
          material={materials["Leaf_01.001"]}
        />
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        near={0.1}
        fov={22.895}
        position={[10.138, 2.653, 9.898]}
        rotation={[-0.097, 0.332, 0.032]}
      />
      <mesh
        //  @ts-ignore
        geometry={nodes.Plane.geometry}
        material={materials["Castle wall"]}
        position={[6.305, -0.129, -0.291]}
      />
      <mesh
        //  @ts-ignore
        geometry={nodes.Cube001.geometry}
        material={materials["Acid Treated Metal"]}
        position={[-1.486, 0.419, -1.073]}
        scale={0.25}
      />
      <mesh
        //  @ts-ignore
        geometry={nodes.Cube002.geometry}
        material={materials.Stone}
        position={[0.78, 0.606, -1.073]}
        scale={[0.25, 0.253, 0.25]}
      />
      <mesh
        //  @ts-ignore
        geometry={nodes.Cube003.geometry}
        material={materials["Wood.001"]}
        position={[3.058, 1.194, -1.073]}
        scale={0.25}
      />
      <mesh
        //  @ts-ignore
        geometry={nodes.Cube004.geometry}
        material={materials["Rough Wood"]}
        position={[5.4, 0.458, -1.073]}
        scale={[0.5, 0.25, 0.25]}
      />
      <mesh
        //  @ts-ignore
        geometry={nodes.Cube005.geometry}
        material={materials["Rough Wood.002"]}
        position={[7.795, 0.337, -1.073]}
        scale={[0.35, 0.253, 0.25]}
      />
      <mesh
        //  @ts-ignore
        geometry={nodes.Cube006.geometry}
        material={materials["Stone Bricks"]}
        position={[10.025, 0.486, -1.073]}
        scale={0.25}
      />
      <mesh
        //  @ts-ignore
        geometry={nodes.Cube007.geometry}
        material={materials.medieval_wall_01}
        position={[12.255, 1.246, -1.073]}
        scale={0.25}
      />
    </group>
  );
}

useGLTF.preload("/models/scene2Optimized.gltf");

function Lights() {
  return (
    <>
      <pointLight intensity={50} decay={5} position={[5.37, 4.899, -0.535]} />
      <pointLight intensity={50} decay={5} position={[12, 3, -2]} />
      <directionalLight
        intensity={0.5}
        // @ts-ignore
        decay={2}
        position={[12.389, 10, 13.073]}
        rotation={[-0.561, 0.053, 0.582]}
      />
      <ambientLight intensity={0.5} />
    </>
  );
}

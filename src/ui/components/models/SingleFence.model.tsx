import * as THREE from "three";
import { Center, Circle, MeshReflectorMaterial, useGLTF } from "@react-three/drei";

import { GLTF } from "three-stdlib";

import useTextures from "../../hooks/useTextures.hook";
import { useValues } from "../../../context/FormValuesContext";
import { WallTypeEnum } from "../../../interfaces/interfaces";

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
        wall: THREE.MeshStandardMaterial;
        pillar: THREE.MeshStandardMaterial;
    };
};

export default function SingleFence(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/models/singleFence.glb") as GLTFResult;
    const { selectedTexturePillar, selectedTextureWall } = useTextures();
    const { values } = useValues();

    return (
        <>
            <color attach="background" args={[`#ebebeb`]} />
            <fog attach="fog" args={["#ebebeb", 0, 20]} />

            {/* --- */}
            <Center>
                <group {...props} receiveShadow castShadow dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Zid.geometry}
                        material={materials.wall}
                        position={[0.002, 0.415, 0]}
                        scale={[1, 1, 2.376]}
                    >
                        <meshStandardMaterial
                            roughness={values.wall.includes("wood") ? 1 : 0.5}
                            metalness={values.wall.includes("wood") ? 0.1 : 0.2}
                            side={THREE.DoubleSide}
                            {...selectedTextureWall}
                            aoMapIntensity={values.wall === WallTypeEnum.WOOD_1 ? 0.3 : 0.8}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LeviStub.geometry}
                        material={materials.pillar}
                        position={[-0.516, 0.432, 0]}
                    >
                        <meshStandardMaterial
                            roughness={0.9}
                            color={"black"}
                            metalness={0.1}
                            {...selectedTexturePillar}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LeviStubCap.geometry}
                        material={materials.pillar}
                        position={[-0.516, 0.432, 0]}
                    >
                        <meshStandardMaterial
                            roughness={0.9}
                            color={"black"}
                            metalness={0.1}
                            {...selectedTexturePillar}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.DesniStubCap.geometry}
                        material={materials.pillar}
                        position={[0.512, 0.432, 0]}
                    >
                        <meshStandardMaterial
                            roughness={0.9}
                            color={"black"}
                            metalness={0.1}
                            {...selectedTexturePillar}
                        />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.DesniStub.geometry}
                        material={materials.pillar}
                        position={[0.512, 0.432, 0]}
                    >
                        <meshStandardMaterial roughness={0.9} {...selectedTexturePillar} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Vrh.geometry}
                        material={materials.pillar}
                        position={[0, 0.8, 0]}
                    >
                        <meshStandardMaterial color={"black"} {...selectedTexturePillar} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.postolje.geometry}
                        material={materials.pillar}
                        position={[0, 0.006, 0]}
                    >
                        <meshStandardMaterial metalness={0.1} {...selectedTexturePillar} />
                    </mesh>
                </group>
            </Center>

            {/* --- */}
            <Circle
                args={[1, 16]}
                receiveShadow
                scale={100}
                rotation-x={-Math.PI / 2}
                position={[0, -0.62, 0]}
            >
                <MeshReflectorMaterial
                    color={"#ebebeb"}
                    envMapIntensity={100}
                    blur={[512, 512]}
                    mixBlur={20}
                    mixStrength={20}
                    mixContrast={0.5}
                    resolution={256}
                    mirror={1}
                    depthScale={20}
                    minDepthThreshold={1}
                    maxDepthThreshold={50}
                    depthToBlurRatioBias={20}
                    roughness={0.9}
                />
            </Circle>
        </>
    );
}

useGLTF.preload("/models/singleFence.glb");

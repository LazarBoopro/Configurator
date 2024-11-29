import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { useValues } from "../../../context/FormValuesContext";
import { DirectionalLight, SpotLight } from "three";

export default function Lights() {
    const { values, scene } = useValues();

    const directionalLightRef = useRef<DirectionalLight>(null);
    const spotLightRef = useRef<SpotLight>(null);

    if (scene === 0) {
        return (
            <>
                <Environment
                    preset="apartment"
                    environmentIntensity={values.wall == "wood_1" ? 0.5 : 0.2}
                />
                <directionalLight
                    ref={directionalLightRef}
                    position={[30, 10, 30]}
                    intensity={1}
                    castShadow
                    receiveShadow
                    color="#FFDFBA"
                    shadow-mapSize={[256, 256]}
                />
                <spotLight
                    ref={spotLightRef}
                    position={[-2, 0, 5]}
                    intensity={2}
                    color="#FFDFBA"
                    angle={Math.PI / 2}
                    castShadow
                    receiveShadow
                />
            </>
        );
    }
    return (
        <>
            <Environment
                preset="apartment"
                environmentIntensity={values.wall == "wood_1" ? 0.5 : 0.2}
            />

            <ambientLight intensity={0.3} />

            <directionalLight
                ref={directionalLightRef}
                position={[30, 10, 30]}
                intensity={1.5}
                castShadow
                receiveShadow
                color="#FFDFBA"
                shadow-mapSize={[256, 256]}
            />

            <spotLight
                ref={spotLightRef}
                position={[-1, 0, 5]}
                intensity={1}
                angle={Math.PI / 2}
                castShadow
                receiveShadow
            />
        </>
    );
}

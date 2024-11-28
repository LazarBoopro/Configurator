import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { useValues } from "../../../context/FormValuesContext";
import { DirectionalLight, SpotLight } from "three";

export default function Lights() {
    const { values, scene } = useValues();

    const directionalLightRef = useRef<DirectionalLight>(null);
    const spotLightRef = useRef<SpotLight>(null);

    // **_LIGHTS DEBUGGING_**
    //   useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);
    //   useHelper(spotLightRef, THREE.SpotLightHelper, 1);

    return (
        <>
            {scene === 0 ? (
                <Environment
                    // preset="apartment"
                    // preset="sunset"
                    preset="warehouse"
                    environmentIntensity={values.wall == "wood_1" ? 0.8 : 0.2}
                />
            ) : (
                <Environment
                    // preset="apartment"
                    // preset="sunset"
                    preset="warehouse"
                    environmentIntensity={values.wall == "wood_1" ? 0.6 : 0.2}
                />
            )}
            <ambientLight intensity={0.3} />

            <directionalLight
                ref={directionalLightRef}
                position={[30, 10, 30]}
                intensity={values.wall.includes("wood") ? 0.2 : 0.5}
                castShadow
                receiveShadow
                color="#E6B390"
                shadow-mapSize={[256, 256]}
            />

            <spotLight
                ref={spotLightRef}
                position={[-2, 0, 5]}
                intensity={values.wall.includes("wood") ? 1 : 2}
                color="#E6B390"
                angle={Math.PI / 2}
                castShadow
                receiveShadow
            />
        </>
    );
}

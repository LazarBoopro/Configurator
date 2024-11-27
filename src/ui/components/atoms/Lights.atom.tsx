import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { useValues } from "../../../context/FormValuesContext";

export default function Lights() {
    const { values, scene } = useValues();

    const directionalLightRef: any = useRef();
    const spotLightRef: any = useRef();

    // **_LIGHTS DEBUGGING_**
    //   useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);
    //   useHelper(spotLightRef, THREE.SpotLightHelper, 1);

    return (
        <>
            {scene === 0 ? (
                <Environment
                    preset="apartment"
                    // environmentIntensity={0.2}
                    environmentIntensity={values.wall == "wood_1" ? 0.8 : 0.3}
                />
            ) : (
                <Environment
                    preset="apartment"
                    // environmentIntensity={0.2}
                    environmentIntensity={values.wall == "wood_1" ? 0.4 : 0.2}
                />
            )}

            <directionalLight
                ref={directionalLightRef}
                position={[30, 10, 30]}
                intensity={values.wall.includes("wood") ? 0.2 : 0.5}
                castShadow
                receiveShadow
                color="#FFDFBA"
                shadow-mapSize={[256, 256]}
            />
            <spotLight
                ref={spotLightRef}
                position={[-2, 0, 5]}
                intensity={values.wall.includes("wood") ? 1 : 2}
                color="#FFDFBA"
                angle={Math.PI / 2}
                castShadow
                receiveShadow
            />
        </>
    );
}

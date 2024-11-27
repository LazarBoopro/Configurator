import { useTexture } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { useValues } from "../../context/FormValuesContext";
import { PillarsTypeEnum, WallTypeEnum } from "../../interfaces/interfaces";

// @ts-expect-error
function configureTexture(texture, { scale, offset, rotation }) {
    const maps = ["map", "normalMap", "height", "aoMap", "roughnessMap"];

    maps.forEach((map) => {
        if (texture[map]) {
            texture[map].wrapS = THREE.RepeatWrapping;
            texture[map].wrapT = THREE.RepeatWrapping;
            texture[map].rotation = rotation;
            texture[map].offset.set(offset.x, offset.y);
            texture[map].repeat.set(scale.x, scale.y);
        }
    });

    if (texture.normalMap) {
        texture.normalScale = new THREE.Vector2(1, 1);
    }
}

export default function useTextures() {
    const { values } = useValues();

    const textures = {
        metal2: useTexture({
            map: "/textures/metal_1/metal_basecolor.jpg",
            normalMap: "/textures/metal_1/metal_normal.png",
            height: "/textures/metal_1/metal_height.jpg",
            aoMap: "/textures/metal_1/metal_ambientOcclusion.jpg",
            roughnessMap: "/textures/metal_1/metal_roughness.jpg",
        }),
        wood1: useTexture({
            map: `/textures/${values.wall ?? "wood_1"}/wood_basecolor.jpg`,
            normalMap: "/textures/wood_1/wood_NORM.jpg",
            height: "/textures/wood_1/wood_DISP.jpg",
            aoMap: "/textures/wood_1/wood_AO.jpg",
            roughnessMap: "/textures/wood_1/wood_ROUGH.jpg",

            // specularMap: "/textures/wood_1/wood_SPEC.jpg",
        }),
        wood2: useTexture({
            map: `/textures/${values.wall ?? "original_1"}/wood_basecolor.jpg`,
            normalMap: "/textures/original_1/wood_normal.png",
            height: "/textures/original_1/wood_height.png",
            aoMap: "/textures/original_1/wood_occ.png",
            roughnessMap: "/textures/original_1/wood_roughness.png",
            // specularMap: "/textures/wood_1/wood_SPEC.jpg",
        }),
        floor: useTexture({
            map: "/textures/floor/floor_COLOR.jpg",
            normalMap: "/textures/floor/floor_NORM.jpg",
            height: "/textures/floor/floor_HEIGHT.png",
            aoMap: "/textures/floor/floor_OCC.jpg",
            roughnessMap: "/textures/floor/floor_ROUGH.jpg",
        }),
    };

    const textureConfigs = {
        metal2: {
            scale: { x: 10, y: 1 },
            offset: { x: 0, y: 0 },
            rotation: 0,
        },

        // WOOOD
        wood1: {
            scale: { x: 3, y: 4 },
            offset: { x: Math.PI / 1.2, y: 0 },
            rotation: Math.PI / 2,
        },
        wood2: {
            scale: { x: 3, y: 4 },
            offset: { x: Math.PI / 1.2, y: 1 },
            rotation: Math.PI / 2,
        },
        floor: { scale: { x: 12, y: 4 }, offset: { x: 0, y: 0 }, rotation: 0 },
    };

    Object.entries(textures).forEach(([key, texture]) => {
        // @ts-expect-error
        configureTexture(texture, textureConfigs[key]);
    });

    const [selectedTextureWall, setSelectedTextureWall] = useState(textures.wood1);
    const [selectedTexturePillar, setSelectedTexturePillar] = useState(textures.metal2);

    useEffect(() => {
        switch (values.wall) {
            case WallTypeEnum.WOOD_1:
            case WallTypeEnum.WOOD_2:
            case WallTypeEnum.WOOD_3:
                setSelectedTextureWall(textures.wood1);
                break;
            case WallTypeEnum.ORIGINAL_1:
            case WallTypeEnum.ORIGINAL_2:
            case WallTypeEnum.ORIGINAL_3:
                setSelectedTextureWall(textures.wood2);
                break;
            default:
                setSelectedTextureWall(textures.wood1);
        }
    }, [values.wall]);

    useEffect(() => {
        switch (values.pillars) {
            case PillarsTypeEnum.ALUMINIUM:
                setSelectedTexturePillar(textures.metal2);
                break;
            default:
                setSelectedTexturePillar(textures.metal2);
        }
    }, [values.pillars]);

    return { floor: textures.floor, selectedTexturePillar, selectedTextureWall };
}

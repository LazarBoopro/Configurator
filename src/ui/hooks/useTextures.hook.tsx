import { useTexture } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { useValues } from "../../context/FormValuesContext";

export default function useTextures() {
    const { values } = useValues();

    // METAL TEXTURE #1
    const metal1TextureScale = { x: 1, y: 10 };
    const metal1TextureOffset = { x: 0, y: 0 };

    const metal1Texture = useTexture({
        map: "/textures/metal_1/metal_basecolor.jpg",
        normalMap: "/textures/metal_1/metal_normal.jpg",
        height: "/textures/metal_1/metal_height.png",
        aoMap: "/textures/metal_1/metal_ambientOcclusion.jpg",
        roughnessMap: "/textures/metal_1/metal_roughness.jpg",
    });

    metal1Texture.aoMap.wrapS =
        metal1Texture.map.wrapS =
        metal1Texture.height.wrapS =
        metal1Texture.normalMap.wrapS =
        metal1Texture.roughnessMap.wrapS =
            THREE.RepeatWrapping;

    metal1Texture.aoMap.wrapT =
        metal1Texture.map.wrapT =
        metal1Texture.height.wrapT =
        metal1Texture.normalMap.wrapT =
        metal1Texture.roughnessMap.wrapT =
            THREE.RepeatWrapping;

    metal1Texture.aoMap.rotation =
        metal1Texture.map.rotation =
        metal1Texture.height.rotation =
        metal1Texture.normalMap.rotation =
        metal1Texture.roughnessMap.rotation =
            Math.PI / 2;

    metal1Texture.aoMap.offset.set(metal1TextureOffset.x, metal1TextureOffset.y);
    metal1Texture.map.offset.set(metal1TextureOffset.x, metal1TextureOffset.y);
    metal1Texture.height.offset.set(metal1TextureOffset.x, metal1TextureOffset.y);
    metal1Texture.normalMap.offset.set(metal1TextureOffset.x, metal1TextureOffset.y);
    metal1Texture.roughnessMap.offset.set(metal1TextureOffset.x, metal1TextureOffset.y);

    metal1Texture.aoMap.repeat.set(metal1TextureScale.x, metal1TextureScale.y);
    metal1Texture.map.repeat.set(metal1TextureScale.x, metal1TextureScale.y);
    metal1Texture.height.repeat.set(metal1TextureScale.x, metal1TextureScale.y);
    metal1Texture.normalMap.repeat.set(metal1TextureScale.x, metal1TextureScale.y);
    metal1Texture.roughnessMap.repeat.set(metal1TextureScale.x, metal1TextureScale.y);

    // METAL TEXTURE #2
    const metal2TextureScale = { x: 1, y: 5 };
    const metal2TextureOffset = { x: 0, y: 0 };

    const metal2Texture = useTexture({
        map: "/textures/metal_2/metal_basecolor.jpg",
        normalMap: "/textures/metal_2/metal_normal.jpg",
        height: "/textures/metal_2/metal_height.jpg",
        aoMap: "/textures/metal_2/metal_ambientOcclusion.jpg",
        roughnessMap: "/textures/metal_2/metal_roughness.jpg",
    });

    metal2Texture.aoMap.wrapS =
        metal2Texture.map.wrapS =
        metal2Texture.height.wrapS =
        metal2Texture.normalMap.wrapS =
        metal2Texture.roughnessMap.wrapS =
            THREE.RepeatWrapping;

    metal2Texture.aoMap.wrapT =
        metal2Texture.map.wrapT =
        metal2Texture.height.wrapT =
        metal2Texture.normalMap.wrapT =
        metal2Texture.roughnessMap.wrapT =
            THREE.RepeatWrapping;

    metal2Texture.aoMap.rotation =
        metal2Texture.map.rotation =
        metal2Texture.height.rotation =
        metal2Texture.normalMap.rotation =
        metal2Texture.roughnessMap.rotation =
            Math.PI / 2;

    metal2Texture.aoMap.offset.set(metal2TextureOffset.x, metal2TextureOffset.y);
    metal2Texture.map.offset.set(metal2TextureOffset.x, metal2TextureOffset.y);
    metal2Texture.height.offset.set(metal2TextureOffset.x, metal2TextureOffset.y);
    metal2Texture.normalMap.offset.set(metal2TextureOffset.x, metal2TextureOffset.y);
    metal2Texture.roughnessMap.offset.set(metal2TextureOffset.x, metal2TextureOffset.y);

    metal2Texture.aoMap.repeat.set(metal2TextureScale.x, metal2TextureScale.y);
    metal2Texture.map.repeat.set(metal2TextureScale.x, metal2TextureScale.y);
    metal2Texture.height.repeat.set(metal2TextureScale.x, metal2TextureScale.y);
    metal2Texture.normalMap.repeat.set(metal2TextureScale.x, metal2TextureScale.y);
    metal2Texture.roughnessMap.repeat.set(metal2TextureScale.x, metal2TextureScale.y);

    // WOOD TEXTURE #2
    const wood2TextureScale = { x: -6, y: 12 };
    const wood2TextureOffset = { x: 0, y: 0 };

    const wood2Texture = useTexture({
        map: `/textures/${values.wall ?? "wood_4"}/wood_basecolor.jpg`,
        normalMap: "/textures/wood_4/wood_normal.jpg",
        height: "/textures/wood_4/wood_height.jpg",
        aoMap: "/textures/wood_4/wood_ambientOcclusion.jpg",
        roughnessMap: "/textures/wood_4/wood_height.jpg",
    });

    wood2Texture.aoMap.wrapS =
        wood2Texture.map.wrapS =
        wood2Texture.height.wrapS =
        wood2Texture.normalMap.wrapS =
        wood2Texture.roughnessMap.wrapS =
            THREE.RepeatWrapping;

    wood2Texture.aoMap.wrapT =
        wood2Texture.map.wrapT =
        wood2Texture.height.wrapT =
        wood2Texture.normalMap.wrapT =
        wood2Texture.roughnessMap.wrapT =
            THREE.RepeatWrapping;

    wood2Texture.aoMap.rotation =
        wood2Texture.map.rotation =
        wood2Texture.height.rotation =
        wood2Texture.normalMap.rotation =
        wood2Texture.roughnessMap.rotation =
            0;

    wood2Texture.aoMap.offset.set(wood2TextureOffset.x, wood2TextureOffset.y);
    wood2Texture.map.offset.set(wood2TextureOffset.x, wood2TextureOffset.y);
    wood2Texture.height.offset.set(wood2TextureOffset.x, wood2TextureOffset.y);
    wood2Texture.normalMap.offset.set(wood2TextureOffset.x, wood2TextureOffset.y);
    wood2Texture.roughnessMap.offset.set(wood2TextureOffset.x, wood2TextureOffset.y);

    wood2Texture.aoMap.repeat.set(wood2TextureScale.x, wood2TextureScale.y);
    wood2Texture.map.repeat.set(wood2TextureScale.x, wood2TextureScale.y);
    wood2Texture.height.repeat.set(wood2TextureScale.x, wood2TextureScale.y);
    wood2Texture.normalMap.repeat.set(wood2TextureScale.x, wood2TextureScale.y);
    wood2Texture.roughnessMap.repeat.set(wood2TextureScale.x, wood2TextureScale.y);

    // WOOD TEXTURE #1
    const wood1TextureScale = { x: -6, y: 8 };
    const wood1TextureOffset = { x: 0, y: 0 };

    const wood1Texture = useTexture({
        map: `/textures/${values.wall ?? "wood_1"}/wood_basecolor.jpg`,
        normalMap: "/textures/wood_1/wood_NORM.jpg",
        height: "/textures/wood_1/wood_DISP.png",
        aoMap: "/textures/wood_1/wood_OCC.jpg",
        roughnessMap: "/textures/wood_1/wood_ROUGH.jpg",
    });

    wood1Texture.aoMap.wrapS =
        wood1Texture.map.wrapS =
        wood1Texture.height.wrapS =
        wood1Texture.normalMap.wrapS =
        wood1Texture.roughnessMap.wrapS =
            THREE.RepeatWrapping;

    wood1Texture.aoMap.wrapT =
        wood1Texture.map.wrapT =
        wood1Texture.height.wrapT =
        wood1Texture.normalMap.wrapT =
        wood1Texture.roughnessMap.wrapT =
            THREE.RepeatWrapping;

    wood1Texture.aoMap.rotation =
        wood1Texture.map.rotation =
        wood1Texture.height.rotation =
        wood1Texture.normalMap.rotation =
        wood1Texture.roughnessMap.rotation =
            0;

    wood1Texture.aoMap.offset.set(wood1TextureOffset.x, wood1TextureOffset.y);
    wood1Texture.map.offset.set(wood1TextureOffset.x, wood1TextureOffset.y);
    wood1Texture.height.offset.set(wood1TextureOffset.x, wood1TextureOffset.y);
    wood1Texture.normalMap.offset.set(wood1TextureOffset.x, wood1TextureOffset.y);
    wood1Texture.roughnessMap.offset.set(wood1TextureOffset.x, wood1TextureOffset.y);

    wood1Texture.aoMap.repeat.set(wood1TextureScale.x, wood1TextureScale.y);
    wood1Texture.map.repeat.set(wood1TextureScale.x, wood1TextureScale.y);
    wood1Texture.height.repeat.set(wood1TextureScale.x, wood1TextureScale.y);
    wood1Texture.normalMap.repeat.set(wood1TextureScale.x, wood1TextureScale.y);
    wood1Texture.roughnessMap.repeat.set(wood1TextureScale.x, wood1TextureScale.y);

    // FLOOR TEXTURE
    const floorScale = { x: 12, y: 4 };
    const floorOffset = { x: 0, y: 0 };

    const floor = useTexture({
        map: "/textures/floor/floor_COLOR.jpg",
        normalMap: "/textures/floor/floor_NORM.jpg",
        height: "/textures/floor/floor_HEIGHT.png",
        aoMap: "/textures/floor/floor_OCC.jpg",
        roughnessMap: "/textures/floor/floor_ROUGH.jpg",
    });

    floor.aoMap.wrapS =
        floor.map.wrapS =
        floor.height.wrapS =
        floor.normalMap.wrapS =
        floor.roughnessMap.wrapS =
            THREE.RepeatWrapping;

    floor.aoMap.wrapT =
        floor.map.wrapT =
        floor.height.wrapT =
        floor.normalMap.wrapT =
        floor.roughnessMap.wrapT =
            THREE.RepeatWrapping;

    floor.aoMap.rotation =
        floor.map.rotation =
        floor.height.rotation =
        floor.normalMap.rotation =
        floor.roughnessMap.rotation =
            0;

    floor.aoMap.offset.set(floorOffset.x, floorOffset.y);
    floor.map.offset.set(floorOffset.x, floorOffset.y);
    floor.height.offset.set(floorOffset.x, floorOffset.y);
    floor.normalMap.offset.set(floorOffset.x, floorOffset.y);
    floor.roughnessMap.offset.set(floorOffset.x, floorOffset.y);

    floor.aoMap.repeat.set(floorScale.x, floorScale.y);
    floor.map.repeat.set(floorScale.x, floorScale.y);
    floor.height.repeat.set(floorScale.x, floorScale.y);
    floor.normalMap.repeat.set(floorScale.x, floorScale.y);
    floor.roughnessMap.repeat.set(floorScale.x, floorScale.y);

    const [selectedTextureWall, setSelectedTextureWall] = useState(wood1Texture);
    const [selectedTexturePillar, setSelectedTexturePillar] = useState(metal1Texture);

    useEffect(() => {
        switch (values.wall) {
            case "wood_1":
            case "wood_2":
            case "wood_3":
                setSelectedTextureWall(wood1Texture);
                break;

            case "wood_4":
            case "wood_5":
            case "wood_6":
                setSelectedTextureWall(wood2Texture);
                break;

            default:
                setSelectedTextureWall(wood1Texture);
        }
    }, [values.wall]);

    useEffect(() => {
        switch (values.pillars) {
            case "metal_1":
                setSelectedTexturePillar(metal1Texture);
                break;
            case "metal_2":
                setSelectedTexturePillar(metal2Texture);
                break;
            default:
                setSelectedTexturePillar(metal1Texture);
        }
    }, [values.pillars]);

    return { floor, selectedTexturePillar, selectedTextureWall };
}

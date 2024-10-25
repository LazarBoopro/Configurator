// Define the type for your values state
export interface ValuesType {
    pillars: PillarsTypeEnum;
    wall: WallTypeEnum;
    application: string;
    height: number;
    length: number;
}
export type TotalPriceType = {
    [key: string]: {
        amount: number;
        totalPrice: number;
    };
};

export type AllPricesType = {
    [key: string]: {
        element: string;
        unit: "m2" | "unit";
        price: number;
    };
};

export enum PillarsTypeEnum {
    CEMENT = "metal_1",
    ALUMINIUM = "metal_2",
}

export enum WallTypeEnum {
    ORIGINAL_1 = "wood_4",
    ORIGINAL_2 = "wood_5",
    ORIGINAL_3 = "wood_6",
    WOOD_1 = "wood_1",
    WOOD_2 = "wood_2",
    WOOD_3 = "wood_3",
}

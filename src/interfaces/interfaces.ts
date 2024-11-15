// Define the type for your values state
export interface ValuesType {
    pillars: PillarsTypeEnum;
    wall: WallTypeEnum;
    height: number;
    length: number;
}

export type TotalPriceType = Partial<{
    [key in keyof AllPricesType]: {
        amount: number;
        totalPrice: number;
    };
}>;

type Product = {
    element: string;
    unit: string;
    price: number;
};

export type AllPricesType = {
    [key in WallTypeEnum]: Product;
} & { [key in PillarsTypeEnum]: Product } & {
    aluminium_molding: Product;
    start_aluminium_molding: Product;
    end_aluminium_molding: Product;
    plastic_cap: Product;
    pillar_mask: Product;
    column_foot: Product;
    anchor: Product;
    screw: Product;
    winkle: Product;
    decors: Product;
};

export enum PillarsTypeEnum {
    ALUMINIUM = "aluminium_pillar",
}

export enum WallTypeEnum {
    ORIGINAL_1 = "original_1",
    ORIGINAL_2 = "original_2",
    ORIGINAL_3 = "original_3",
    WOOD_1 = "wood_1",
    WOOD_2 = "wood_2",
    WOOD_3 = "wood_3",
}

// ValuesContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import {
    PillarsTypeEnum,
    TotalPriceType,
    ValuesType,
    WallTypeEnum,
} from "../interfaces/interfaces";

// Define the type for your context provider props
interface ValuesProviderProps {
    children: ReactNode;
}

// Create the context with a default value
const ValuesContext = createContext<
    | {
          values: ValuesType;
          setValues: React.Dispatch<React.SetStateAction<ValuesType>>;
          scene: number;
          setScene: React.Dispatch<React.SetStateAction<number>>;
          total: TotalPriceType;
          setTotal: React.Dispatch<React.SetStateAction<TotalPriceType>>;
      }
    | undefined
>(undefined);

// Create the provider component
export const ValuesProvider: React.FC<ValuesProviderProps> = ({ children }) => {
    const [values, setValues] = useState<ValuesType>({
        pillars: PillarsTypeEnum.CEMENT,
        wall: WallTypeEnum.WOOD_1,
        application: "Bez aplikacije",
        height: 45,
        length: 0,
    });

    const [scene, setScene] = useState(0);
    const [total, setTotal] = useState<any>({});

    return (
        <ValuesContext.Provider value={{ values, setValues, scene, setScene, total, setTotal }}>
            {children}
        </ValuesContext.Provider>
    );
};

// Create a custom hook to use the ValuesContext
export const useValues = () => {
    const context = useContext(ValuesContext);
    if (!context) {
        throw new Error("useValues must be used within a ValuesProvider");
    }
    return context;
};

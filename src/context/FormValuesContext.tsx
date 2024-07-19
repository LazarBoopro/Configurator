// ValuesContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import { ValuesType } from "../interfaces/interfaces";

// Define the type for your context provider props
interface ValuesProviderProps {
  children: ReactNode;
}

// Create the context with a default value
const ValuesContext = createContext<
  | {
      values: ValuesType;
      setValues: React.Dispatch<React.SetStateAction<ValuesType>>;
    }
  | undefined
>(undefined);

// Create the provider component
export const ValuesProvider: React.FC<ValuesProviderProps> = ({ children }) => {
  const [values, setValues] = useState<ValuesType>({
    pillars: {
      name: "concrete",
      texture: "Plaster 17",
    },
    wall: {
      name: "wood",
      texture: "Wood.003",
    },
    application: "Bez aplikacije",
    height: 45,
    length: 0,
  });

  return (
    <ValuesContext.Provider value={{ values, setValues }}>
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

import { AllPricesType } from "../interfaces/interfaces";

export const tableRows = [
    {
        key: "element",
        label: "Element",
    },
    {
        key: "amount",
        label: "Kolicina",
    },
    {
        key: "unit",
        label: "Jedinica",
    },
    {
        key: "price",
        label: "Cena €",
    },
    {
        key: "total",
        label: "Ukupno €",
    },
];

export const prices: AllPricesType = {
    wood_1: {
        element: "WPC Deking Wood 1",
        unit: "m2",
        price: 38,
    },
    wood_2: {
        element: "WPC Deking Wood 2",
        unit: "m2",
        price: 38,
    },
    wood_3: {
        element: "WPC Deking Wood 3",
        unit: "m2",
        price: 38,
    },
    wood_4: {
        element: "WPC Deking Original 1",
        unit: "m2",
        price: 38,
    },
    wood_5: {
        element: "WPC Deking Original 2",
        unit: "m2",
        price: 38,
    },
    wood_6: {
        element: "WPC Deking Original 3",
        unit: "m2",
        price: 38,
    },

    metal_1: {
        element: "Betonski stub",
        unit: "unit",
        price: 0,
    },
    metal_2: {
        element: "Aluminijumski stub",
        unit: "unit",
        price: 40,
    },

    alu_lajsna: {
        element: "Alu stubna lajsna ( 23,6mm x 7mm x 1770mm )",
        unit: "unit",
        price: 3.5,
    },

    start_alu: {
        element: "Početna aluminijumska lajsna ( 21,5mm x 30mm x 1770mm )",
        unit: "unit",
        price: 8,
    },

    end_alu: {
        element: "Završna aluminijumska lajsna ",
        unit: "unit",
        price: 8,
    },

    plastic_cap: {
        element: "Plastična kapa stuba ",
        unit: "unit",
        price: 1.5,
    },

    mask: {
        element: " Maska za stubnu stopu ",
        unit: "unit",
        price: 2.5,
    },
    stopa: {
        element: " Stopa za stub / nosač stuba  ",
        unit: "unit",
        price: 10,
    },
    anker: {
        element: "Ankeri ",
        unit: "unit",
        price: 1,
    },
    screw: {
        element: "Šrafovi za ankere  ",
        unit: "unit",
        price: 0.5,
    },
    vinkla: {
        element: "Stubna L Vinkla sa šrafovima  ",
        unit: "unit",
        price: 1.2,
    },
    decors: {
        element: "Dekorativne aplikacije  (300mm x 20mm x 1800mm) ",
        unit: "unit",
        price: 40,
    },
};

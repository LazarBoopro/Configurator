import Input from "../atoms/Input.atom";
import Select from "../atoms/Select.atom";
import Text from "../atoms/Text.atom";

import { useValues } from "../../../context/FormValuesContext";
import { AllPricesType, ValuesType } from "../../../interfaces/interfaces";
import { CheckIcon } from "../atoms/CheckIcon.atom";

import wood1 from "../../../../public/textures/wood_1/wood_basecolor.jpg";
import wood2 from "../../../../public/textures/wood_2/wood_basecolor.jpg";
import wood3 from "../../../../public/textures/wood_3/wood_basecolor.jpg";
import wood4 from "../../../../public/textures/wood_4/wood_basecolor.jpg";
import wood5 from "../../../../public/textures/wood_5/wood_basecolor.jpg";
import wood6 from "../../../../public/textures/wood_6/wood_basecolor.jpg";

import "../../styles/form.scss";
import { prices } from "../../../helpers/constants";

const Form = () => {
    const { values, setValues, scene, setScene, setTotal } = useValues();

    const calculateTotalPrice = (values: ValuesType) => {
        const amount = Math.round(values.height * 0.01 * values.length * 100) / 100;
        const pillarsCount = Math.floor(values.length / 1.8) + 1;

        const totalMaterial = {
            [values.wall]: {
                amount: amount,
                totalPrice: prices[values.wall as keyof typeof prices].price * amount,
            },
            [values.pillars]: {
                amount: pillarsCount,
                totalPrice: prices[values.pillars as keyof typeof prices].price * pillarsCount,
            },

            alu_lajsna: {
                amount: 1,
                totalPrice: prices.alu_lajsna.price * 1,
            },

            start_alu: {
                amount: 1,
                totalPrice: prices.start_alu.price * 1,
            },

            end_alu: {
                amount: 1,
                totalPrice: prices.end_alu.price * 1,
            },

            plastic_cap: {
                amount: 1,
                totalPrice: prices.plastic_cap.price * 1,
            },

            mask: {
                amount: 1,
                totalPrice: prices.mask.price * 1,
            },
            stopa: {
                amount: 1,
                totalPrice: prices.stopa.price * 1,
            },
            anker: {
                amount: 4,
                totalPrice: prices.anker.price * 1,
            },
            screw: {
                amount: 4,
                totalPrice: prices.screw.price * 1,
            },
            vinkla: {
                amount: 1,
                totalPrice: prices.vinkla.price * 1,
            },
            decors: {
                totalPrice: prices.decors.price * 1,
                amount: 1,
            },
        };

        return totalMaterial;
    };

    const onChange = (value: boolean | string | number, key: keyof ValuesType) => {
        setValues({ ...values, [key]: value });
        const totalMaterial = calculateTotalPrice({ ...values, [key]: value });

        setTotal(totalMaterial);
    };

    const calculateInstallationPrice = (values: ValuesType): string => {
        const amount = values.height * 0.01 * values.length;

        return `${prices[values.wall as keyof typeof prices].price * amount}`;
    };

    const calculateMaterialPrice = (): string => {
        const totalMaterial = calculateTotalPrice(values);

        const totalPrice = Object.values(totalMaterial).reduce(
            (acc, curr) => acc + curr.totalPrice,
            0
        );

        return `${Math.round(totalPrice * 100) / 100}`;
    };

    return (
        <div className="form-main">
            <Text variant="title">Napravi svoju ogradu</Text>
            <div className="divider" />

            <div className="form-main__row">
                <Text variant="info">Model </Text>
                <div className="options">
                    <Input
                        onChange={() => {
                            setScene(0);
                        }}
                        label="Izolovani"
                        type="radio"
                        name="scena"
                        selected={scene === 0}
                    />
                    <Input
                        onChange={() => {
                            setScene(1);
                        }}
                        label="Scena"
                        type="radio"
                        name="scena"
                        selected={scene === 1}
                    />
                </div>
            </div>

            <div className="form-main__row">
                <Text variant="info">Tip stubova </Text>
                <div className="options">
                    <Input
                        onChange={() => {
                            onChange("metal_1", "pillars");
                        }}
                        label="Betonski"
                        type="radio"
                        selected={values.pillars === "metal_1"}
                        name="stub"
                    />
                    <Input
                        onChange={() => {
                            onChange("metal_2", "pillars");
                        }}
                        label="Aluminijumski"
                        type="radio"
                        name="stub"
                        selected={values.pillars === "metal_2"}
                    />
                </div>
            </div>

            <div className="form-main__row">
                <Text variant="info">Tip zida</Text>
                <div className="row-items">
                    <div
                        className="color-cont"
                        onClick={() => {
                            onChange("wood_1", "wall");
                        }}
                    >
                        <img className="color-image" src={wood1} />
                        {values.wall === "wood_1" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>

                    <div
                        className="color-cont"
                        onClick={() => {
                            onChange("wood_2", "wall");
                        }}
                    >
                        <img className="color-image" src={wood2} />
                        {values.wall === "wood_2" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>

                    <div
                        className="color-cont"
                        onClick={() => {
                            onChange("wood_3", "wall");
                        }}
                    >
                        <img className="color-image" src={wood3} style={{ opacity: 0.85 }} />
                        {values.wall === "wood_3" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>

                    <div
                        className="color-cont"
                        onClick={() => {
                            onChange("wood_4", "wall");
                        }}
                    >
                        <img className="color-image" src={wood4} style={{ opacity: 0.85 }} />
                        {values.wall === "wood_4" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>
                    <div
                        className="color-cont"
                        onClick={() => {
                            onChange("wood_5", "wall");
                        }}
                    >
                        <img className="color-image" src={wood5} style={{ opacity: 0.85 }} />
                        {values.wall === "wood_5" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>
                    <div
                        className="color-cont"
                        onClick={() => {
                            onChange("wood_6", "wall");
                        }}
                    >
                        <img className="color-image" src={wood6} style={{ opacity: 0.85 }} />
                        {values.wall === "wood_6" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div>
                <Select
                    options={[
                        { label: "45 cm", value: 45 },
                        { label: "60 cm", value: 60 },
                        { label: "75 cm", value: 75 },
                        { label: "90 cm", value: 90 },
                        { label: "105 cm", value: 105 },
                        { label: "120 cm", value: 120 },
                        { label: "135 cm", value: 135 },
                        { label: "150 cm", value: 150 },
                    ]}
                    onChange={(e) => {
                        onChange(e.target.value, "height");
                    }}
                    label="Visina"
                    defaultValue={values.height}
                />
            </div>

            <div>
                <Input
                    onChange={(e) => {
                        onChange(e.target.value, "length");
                    }}
                    label="Duzina (m)"
                    type="number"
                    defaultValue={values.length}
                />
            </div>

            <div>
                <table className="table">
                    <tbody className="body">
                        <tr className="row">
                            <td className="cell primary">Stub</td>
                            <td className="cell">
                                {prices[values.pillars as keyof AllPricesType].element}
                            </td>
                        </tr>
                        <tr className="row">
                            <td className="cell primary">Tip zida</td>
                            <td className="cell">
                                {prices[values.wall as keyof AllPricesType].element}
                            </td>
                        </tr>

                        <tr className="row">
                            <td className="cell primary">Visina</td>
                            <td className="cell">{values.height}</td>
                        </tr>
                        <tr className="row">
                            <td className="cell primary">Duzina</td>
                            <td className="cell">{values.length}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="price">
                <Text>Cena materijala:</Text>
                <Text color="red" options="bold">
                    {calculateMaterialPrice()} €
                </Text>
            </div>

            <div className="price">
                <Text>Cena montaze: </Text>
                <Text color="red" options="bold">
                    {calculateInstallationPrice(values)} €
                </Text>
            </div>

            <div className="note">
                <Text options="bold"> Napomena:</Text>
                <Text color="primary">
                    Prikazana cena je bez uračunatog PDV-a, a trošak montaže je informativnog
                    karaktera, bez uračunatih transportnih i terenskih troškova. Za instalaciju
                    Savadeck ograde obavezno je pripremiti betonsku osnovu (parapet) širine 20 cm.
                </Text>
            </div>

            <div className="info-wrapper">
                <Text variant="info">
                    Za specifične zahteve izvan standardnih dimenzija, molimo pošaljite upit na
                    info@savadeck.com. Konfigurator je informativnog karaktera.
                </Text>
            </div>
        </div>
    );
};

export default Form;

//  {
//    /* APLIKACIJE */
//  }

//  {
//    /* <div className="form-main__row">
//       <Text variant="info">Aplikacija: </Text>
//       <div className="row-items">
//         <div
//           className="application-cont"
//           onClick={() => {
//             onChange("Bez aplikacije", "application");
//           }}
//         >
//           <img className="application-image" />
//           {values.application === "Bez aplikacije" && (
//             <div className="check-icon">
//               <CheckIcon />
//             </div>
//           )}
//         </div>
//         <div
//           className="application-cont"
//           onClick={() => {
//             onChange("Application 1", "application");
//           }}
//         >
//           <img
//             className="application-image"
//             style={{ backgroundColor: "blue" }}
//           />
//           {values.application === "Application 1" && (
//             <div className="check-icon">
//               <CheckIcon />
//             </div>
//           )}
//         </div>
//         <div
//           className="application-cont"
//           onClick={() => {
//             onChange("Application 2", "application");
//           }}
//         >
//           <img
//             className="application-image"
//             style={{ backgroundColor: "yellow" }}
//           />
//           {values.application === "Application 2" && (
//             <div className="check-icon">
//               <CheckIcon />
//             </div>
//           )}
//         </div>
//       </div>
//     </div> */
//  }
//  {
//    /* APLIKACIJE */
//  }

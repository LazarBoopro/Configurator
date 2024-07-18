import "../../styles/form.scss";
import Input from "../atoms/Input.atom";
import Select from "../atoms/Select.atom";
import Text from "../atoms/Text.atom";
import { useValues } from "../../../context/FormValuesContext";
import { ValuesType } from "../../../interfaces/interfaces";
import { CheckIcon } from "../atoms/CheckIcon.atom";

const Form = () => {
    const { values, setValues } = useValues();

    const onChange = (value: boolean | string | number, key: keyof ValuesType) => {
        setValues({ ...values, [key]: value });
    };

    const calculateInstallationPrice = (values: ValuesType): string => {
        // Add your logic to calculate the installation price based on the form values
        // For example:
        const basePrice = 50; // Base price for installation
        const heightPrice = values.height * 5; // Price based on the height
        const lengthPrice = values.length * 2; // Price based on the length

        return `${basePrice + heightPrice + lengthPrice}`;
    };

    const calculateMaterialPrice = (values: ValuesType): string => {
        // Add your logic to calculate the installation price based on the form values
        // For example:
        const basePrice = 50; // Base price for installation
        const heightPrice = values.height * 5; // Price based on the height
        const lengthPrice = values.length * 2; // Price based on the length

        return `${basePrice + heightPrice + lengthPrice}`;
    };

    return (
        <div className="form-main">
            <Text variant="title">Dizajnirajte izgled</Text>
            <div className="divider" />

            <div>
                <Text>Da li imate postojece stubove? </Text>
                <Input
                    onChange={() => {
                        onChange(true, "pillars");
                    }}
                    label="Da"
                    type="radio"
                    name="stub"
                />
                <Input
                    onChange={() => {
                        onChange(false, "pillars");
                    }}
                    label="Ne"
                    type="radio"
                    name="stub"
                />
            </div>

            <div>
                <Text>Boja</Text>
                <div className="row-items">
                    <div
                        className="color-cont"
                        onClick={() => {
                            onChange("Boja 1", "color");
                        }}
                    >
                        <img className="color-image" style={{ backgroundColor: "red" }} />
                        {values.color === "Boja 1" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>
                    <div
                        className="color-cont"
                        onClick={() => {
                            onChange("Boja 2", "color");
                        }}
                    >
                        <img className="color-image" style={{ backgroundColor: "green" }} />
                        {values.color === "Boja 2" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <Text>Aplikacija: </Text>
                <div className="row-items">
                    <div
                        className="application-cont"
                        onClick={() => {
                            onChange("Bez aplikacije", "application");
                        }}
                    >
                        <img className="application-image" />
                        {values.application === "Bez aplikacije" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>
                    <div
                        className="application-cont"
                        onClick={() => {
                            onChange("Application 1", "application");
                        }}
                    >
                        <img className="application-image" style={{ backgroundColor: "blue" }} />
                        {values.application === "Application 1" && (
                            <div className="check-icon">
                                <CheckIcon />
                            </div>
                        )}
                    </div>
                    <div
                        className="application-cont"
                        onClick={() => {
                            onChange("Application 2", "application");
                        }}
                    >
                        <img className="application-image" style={{ backgroundColor: "yellow" }} />
                        {values.application === "Application 2" && (
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
                />
            </div>

            <div>
                <Input
                    onChange={(e) => {
                        onChange(e.target.value, "length");
                    }}
                    label="Duzina"
                    type="number"
                />
            </div>

            <div>
                <table className="table">
                    <tbody className="body">
                        <tr className="row">
                            <td className="cell primary">Stub</td>
                            <td className="cell">
                                {values.pillars ? "Betonski" : "Aluminijumski"}
                            </td>
                        </tr>
                        <tr className="row">
                            <td className="cell primary">Boja</td>
                            <td className="cell">{values.color}</td>
                        </tr>
                        <tr className="row">
                            <td className="cell primary">Aplikacija</td>
                            <td className="cell">{values.application}</td>
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
                    {calculateMaterialPrice(values)} €
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

            <div>
                <Text variant="info">
                    Za specifične zahteve izvan standardnih dimenzija, molimo pošaljite upit na
                    info@savadeck.com. Konfigurator je informativnog karaktera.
                </Text>
            </div>
        </div>
    );
};

export default Form;

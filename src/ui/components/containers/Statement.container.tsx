import { useValues } from "../../../context/FormValuesContext";
import "../../styles/statement.scss";
import Text from "../atoms/Text.atom";

const tableRows = [
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

const tableData = [
    {
        element: "Natur ograda Black",
        amount: 3.24,
        unit: "m",
        price: 4,
    },
    {
        element: "Natur ograda Black",
        amount: 3.24,
        unit: "m",
        price: 4,
    },
    {
        element: "Natur ograda Black",
        amount: 3.24,
        unit: "m",
        price: 4,
    },
    {
        element: "Natur ograda Black",
        amount: 3.24,
        unit: "m",
        price: 4,
    },
    {
        element: "Natur ograda Black",
        amount: 3.24,
        unit: "m",
        price: 4,
    },
    {
        element: "Natur ograda Black",
        amount: 3.24,
        unit: "m",
        price: 4,
    },
    {
        element: "Natur ograda Black",
        amount: 3.24,
        unit: "m",
        price: 4,
    },
];

const Statement = () => {
    const { values } = useValues();

    return (
        <div className="statement-main">
            <h1>Obracun</h1>
            <div className="divider" />
            <div className="grid-cont">
                <div className="pill">
                    <Text color="primary" variant="info">
                        Stub:
                    </Text>
                    <Text variant="info">{values.pillars ? "Betonski" : "Aluminijumski"} </Text>
                </div>
                <div className="pill">
                    <Text color="primary" variant="info">
                        Boja:
                    </Text>
                    <Text variant="info">{values.color}</Text>
                </div>
                <div className="pill">
                    <Text color="primary" variant="info">
                        Aplikacija:
                    </Text>
                    <Text variant="info">{values.application}</Text>
                </div>
                <div className="pill">
                    <Text color="primary" variant="info">
                        Visina:
                    </Text>
                    <Text variant="info">{`${values.height}`}</Text>
                </div>
                <div className="pill">
                    <Text color="primary" variant="info">
                        Duzina:
                    </Text>
                    <Text variant="info">{`${values.length}`}</Text>
                </div>
            </div>
            <table className="table">
                <thead className="head">
                    <tr className="head-row">
                        {tableRows.map((row) => (
                            <th className="head-cell">{row.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="body">
                    {tableData.map((data) => (
                        <tr className="row">
                            {tableRows.map((row) => (
                                <td className="cell">
                                    {row.key === "total"
                                        ? `${data.amount * data.price}`
                                        : data[row.key as keyof typeof data]}
                                </td>
                            ))}
                        </tr>
                    ))}

                    <tr className="total-row">
                        <td colSpan={4}>Ukupno</td>
                        <td>12 €</td>
                    </tr>
                </tbody>
            </table>

            <table className="table">
                <tbody className="body">
                    <tr className="row">
                        <td className="cell">Montaza stubova</td>
                        <td className="cell">/</td>
                    </tr>
                    <tr className="row">
                        <td className="cell">Montaza ispune</td>
                        <td className="cell">/</td>
                    </tr>
                    <tr className="row">
                        <td className="cell">Montaza lajsni</td>
                        <td className="cell">/</td>
                    </tr>

                    <tr className="total-row">
                        <td>Ukupno</td>
                        <td>12 €</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Statement;

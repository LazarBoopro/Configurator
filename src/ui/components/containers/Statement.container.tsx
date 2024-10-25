import { useValues } from "../../../context/FormValuesContext";
import { prices, tableRows } from "../../../helpers/constants";
import { AllPricesType } from "../../../interfaces/interfaces";
import "../../styles/statement.scss";
import Text from "../atoms/Text.atom";

const Statement = () => {
    const { values, total } = useValues();

    return (
        <div className="statement-main">
            <h1>Obracun</h1>
            <div className="divider" />
            <div className="grid-cont">
                <div className="pill">
                    <Text color="primary" variant="info">
                        Stub:
                    </Text>
                    <Text variant="info">
                        {prices[values.pillars as keyof AllPricesType].element}
                    </Text>
                </div>
                <div className="pill">
                    <Text color="primary" variant="info">
                        Zid:
                    </Text>
                    <Text variant="info">{prices[values.wall as keyof AllPricesType].element}</Text>
                </div>

                <div className="pill">
                    <Text color="primary" variant="info">
                        Visina:
                    </Text>
                    <Text variant="info">{`${values.height} cm`}</Text>
                </div>
                <div className="pill">
                    <Text color="primary" variant="info">
                        Duzina:
                    </Text>
                    <Text variant="info">{`${values.length} m`}</Text>
                </div>
            </div>
            <table className="table">
                <thead className="head">
                    <tr className="head-row">
                        {tableRows.map((row) => (
                            <th className="head-cell" key={row.label}>
                                {row.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="body">
                    {Object.keys(total).map((key) => (
                        <tr className="row" key={key}>
                            <td className="cell">{prices[key as keyof typeof prices].element}</td>
                            <td className="cell">{total[key].amount}</td>
                            <td className="cell">{prices[key as keyof typeof prices].unit}</td>
                            <td className="cell">{prices[key as keyof typeof prices].price}</td>
                            <td className="cell">
                                {prices[key as keyof typeof prices].price * total[key].amount}
                            </td>
                        </tr>
                    ))}

                    <tr className="total-row">
                        <td colSpan={4}>Ukupno</td>
                        <td>
                            {Math.round(
                                Object.values(total).reduce(
                                    (acc, curr) => acc + curr.totalPrice,
                                    0
                                ) * 100
                            ) / 100}{" "}
                            €
                        </td>
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
                        <td>123 €</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Statement;

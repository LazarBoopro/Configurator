import { useValues } from "../../../context/FormValuesContext";
import { prices, tableRows } from "../../../helpers/constants";
import { AllPricesType } from "../../../interfaces/interfaces";
import "../../styles/statement.scss";
import Text from "../atoms/Text.atom";

const Statement = () => {
  const { values, total } = useValues();

  return (
    <div className="statement-main">
      <h1>Obračun</h1>
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
            Decking / ispuna:
          </Text>
          <Text variant="info">
            {prices[values.wall as keyof AllPricesType].element}
          </Text>
        </div>
        <div className="pill">
          <Text color="primary" variant="info">
            Broj polja:
          </Text>
          <Text variant="info">{`${
            (total?.[values.pillars]?.amount ?? 1) - 1
          }`}</Text>
        </div>

        <div className="pill">
          <Text color="primary" variant="info">
            Visina:
          </Text>
          <Text variant="info">{`${values.height} cm`}</Text>
        </div>
        <div className="pill">
          <Text color="primary" variant="info">
            Dužina:
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
          {total &&
            Object.keys(total).map((key) => (
              <tr className="row" key={key}>
                <td className="cell">
                  {prices[key as keyof typeof prices].element}
                </td>
                <td className="cell">
                  {total[key as keyof typeof total]?.amount}
                </td>
                <td className="cell">
                  {prices[key as keyof typeof prices].unit}
                </td>
                <td className="cell">
                  {prices[key as keyof typeof prices].price}
                </td>
                <td className="cell">
                  {total[key as keyof typeof total]?.totalPrice}
                </td>
              </tr>
            ))}

          <tr className="total-row">
            <td colSpan={4}>Ukupno</td>
            <td>
              {total &&
                Math.round(
                  Object.values(total).reduce(
                    (acc, curr) => acc + curr.totalPrice,
                    0
                  ) * 100
                ) / 100}
              €
            </td>
          </tr>
        </tbody>
      </table>

      <div className="note">
        <Text options="bold"> Napomena:</Text>
        <Text color="primary">
          Prikazana cena je bez uračunatog PDV-a i bez uračunatih transportnih i
          terenskih troškova. Za instalaciju Decking Zona ograde obavezno je
          pripremiti betonsku osnovu (parapet) širine 20 cm.
        </Text>
      </div>
    </div>
  );
};

export default Statement;

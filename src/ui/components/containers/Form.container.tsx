import { useCallback, useState } from "react";

import Input from "../atoms/Input.atom";
import Select from "../atoms/Select.atom";
import Text from "../atoms/Text.atom";

import { useValues } from "../../../context/FormValuesContext";
import {
  AllPricesType,
  PillarsTypeEnum,
  TotalPriceType,
  ValuesType,
} from "../../../interfaces/interfaces";

import { heightList, prices, woodTypes } from "../../../helpers/constants";

import "../../styles/form.scss";

const roundNumber = (num: number) => {
  return Math.round(num * 100) / 100;
};
const Form = () => {
  const { values, setValues, scene, setScene, setTotal } = useValues();
  const [error, setError] = useState(false);

  const calculateTotalPrice = useCallback(
    (values: ValuesType) => {
      const deckDim = 0.27;
      const deckHeight = 14;
      const deckMaxLength = 1.8;

      const pillarsCount = Math.ceil(values.length / 1.8) + 1;
      const fieldsCount = pillarsCount - 1;
      const decksInFieldCount = Math.floor(values.height / deckHeight);
      const lastFieldLength = values.length - (fieldsCount - 1) * deckMaxLength;

      let decksTotal = 0;

      if (lastFieldLength <= 0.45) {
        decksTotal =
          (fieldsCount - 1) * decksInFieldCount +
          Math.ceil(decksInFieldCount / 4);
      } else if (lastFieldLength <= 0.9) {
        decksTotal =
          (fieldsCount - 1) * decksInFieldCount +
          Math.ceil(decksInFieldCount / 2);
      } else {
        decksTotal = fieldsCount * decksInFieldCount;
      }

      const totalMaterial: TotalPriceType = {
        [values.wall]: {
          amount: decksTotal,
          totalPrice: roundNumber(
            prices[values.wall as keyof typeof prices].price *
              decksTotal *
              deckDim
          ),
        },
        [values.pillars]: {
          amount: pillarsCount,
          totalPrice: roundNumber(
            prices[values.pillars as keyof typeof prices].price * pillarsCount
          ),
        },

        aluminium_molding: {
          amount: pillarsCount + 2,
          totalPrice: roundNumber(
            prices.aluminium_molding.price * (pillarsCount + 2)
          ),
        },

        start_aluminium_molding: {
          amount: fieldsCount,
          totalPrice: roundNumber(
            prices.start_aluminium_molding.price * fieldsCount
          ),
        },

        end_aluminium_molding: {
          amount: fieldsCount,
          totalPrice: roundNumber(
            prices.end_aluminium_molding.price * fieldsCount
          ),
        },

        plastic_cap: {
          amount: pillarsCount,
          totalPrice: roundNumber(prices.plastic_cap.price * pillarsCount),
        },

        pillar_mask: {
          amount: pillarsCount,
          totalPrice: roundNumber(prices.pillar_mask.price * pillarsCount),
        },
        column_foot: {
          amount: pillarsCount,
          totalPrice: roundNumber(prices.column_foot.price * pillarsCount),
        },
        anchor: {
          amount: 4 * pillarsCount,
          totalPrice: roundNumber(prices.anchor.price * 4 * pillarsCount),
        },
        screw: {
          amount: 4 * pillarsCount,
          totalPrice: roundNumber(prices.screw.price * 4 * pillarsCount),
        },
        winkle: {
          amount: pillarsCount,
          totalPrice: roundNumber(prices.winkle.price * pillarsCount),
        },
      };

      return totalMaterial;
    },
    [values.height, values.length]
  );

  const onChange = (
    value: boolean | string | number,
    key: keyof ValuesType
  ) => {
    setValues({ ...values, [key]: value });
    const totalMaterial = calculateTotalPrice({ ...values, [key]: value });

    setTotal(totalMaterial);
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
              onChange(PillarsTypeEnum.ALUMINIUM, "pillars");
            }}
            label="Aluminijumski (crna RAL9004)"
            type="radio"
            name="stub"
            selected={values.pillars === PillarsTypeEnum.ALUMINIUM}
          />
        </div>
      </div>

      <div className="form-main__row">
        <Text variant="info">Deking / ispuna</Text>
        <div className="row-items">
          {woodTypes.map((type) => (
            <div
              key={type.name}
              className={`color-cont ${
                values.wall === type.name ? "active" : ""
              }`}
              onClick={() => {
                onChange(type.name, "wall");
              }}
            >
              <img
                className="color-cont__image"
                src={`/images/wood_types/${type.name}.jpg`}
              />
              <div className="color-cont__title">
                <p className="type">{type.type}</p>
                <p className="title">{type.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Select
          options={heightList}
          onChange={(e) => {
            onChange(parseInt(e.target.value), "height");
          }}
          label="Visina"
          defaultValue={values.height}
        />
      </div>

      <div>
        <Input
          onChange={(e) => {
            const length = e.target.value ? parseFloat(e.target.value) : 0;

            onChange(length, "length");

            length < 0.9 ? setError(true) : setError(false);
          }}
          label="Dužina (m)"
          type="number"
          defaultValue={values.length}
          minValue={0.9}
        />
        {error && (
          <Text variant="info" color="red">
            Minimalna dužina je 0.9m
          </Text>
        )}
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
              <td className="cell primary">Decking / ispuna</td>
              <td className="cell">
                {prices[values.wall as keyof AllPricesType].element}
              </td>
            </tr>

            <tr className="row">
              <td className="cell primary">Visina</td>
              <td className="cell">{values.height} cm</td>
            </tr>
            <tr className="row">
              <td className="cell primary">Dužina</td>
              <td className="cell">{values.length} m</td>
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

      <div className="note">
        <Text options="bold"> Napomena:</Text>
        <Text color="primary">
          Prikazana cena je bez uračunatog PDV-a, a trošak montaže je
          informativnog karaktera, bez uračunatih transportnih i terenskih
          troškova. Za instalaciju Decking Zona ograde obavezno je pripremiti
          betonsku osnovu (parapet) širine 20 cm.
        </Text>
      </div>

      <div className="info-wrapper">
        <Text variant="info">
          Za specifične zahteve izvan standardnih dimenzija, molimo pošaljite
          upit na info@deckingzona.com. Konfigurator je informativnog karaktera.
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

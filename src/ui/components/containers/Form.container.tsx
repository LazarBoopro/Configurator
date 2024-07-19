import Input from "../atoms/Input.atom";
import Select from "../atoms/Select.atom";
import Text from "../atoms/Text.atom";
import { useValues } from "../../../context/FormValuesContext";
import { ValuesType } from "../../../interfaces/interfaces";
import { CheckIcon } from "../atoms/CheckIcon.atom";

import wood1 from "../../../../public/textures/icons/wood 1.jpg";
import wood2 from "../../../../public/textures/icons/wood 2.jpg";
import wood3 from "../../../../public/textures/icons/wood 3.jpg";
import wood4 from "../../../../public/textures/icons/wood 4.jpg";
import stone from "../../../../public/textures/icons/stone.jpg";

import "../../styles/form.scss";

const Form = () => {
  const { values, setValues } = useValues();

  const onChange = (
    value: boolean | string | number | object,
    key: keyof ValuesType
  ) => {
    setValues({ ...values, [key]: value });
  };

  const calculateInstallationPrice = (values: ValuesType): string => {
    const basePrice = 50,
      heightPrice = values.height * 5,
      lengthPrice = values.length * 2;

    return `${basePrice + heightPrice + lengthPrice}`;
  };

  const calculateMaterialPrice = (values: ValuesType): string => {
    const basePrice = 50,
      heightPrice = values.height * 5,
      lengthPrice = values.length * 2;

    return `${basePrice + heightPrice + lengthPrice}`;
  };

  return (
    <div className="form-main">
      <Text variant="title">Napravi svoju ogradu</Text>
      <div className="divider" />

      <div className="form-main__row">
        <Text variant="info">Tip stubova </Text>
        <div className="options">
          <Input
            onChange={() => {
              onChange(
                {
                  name: "concrete",
                  texture: "Plaster 17",
                },
                "pillars"
              );
            }}
            label="Betonski"
            type="radio"
            name="stub"
          />
          <Input
            onChange={() => {
              onChange(
                {
                  name: "alu",
                  texture: "Acid Treated Metal",
                },
                "pillars"
              );
            }}
            label="Aluminijumski"
            type="radio"
            name="stub"
          />
        </div>
      </div>

      <div className="form-main__row">
        <Text variant="info">Tip zida</Text>
        <div className="row-items">
          <div
            className="color-cont"
            onClick={() => {
              onChange(
                {
                  name: "Drvo",
                  texture: "Wood.003",
                },
                "wall"
              );
            }}
          >
            <img className="color-image" src={wood3} style={{ opacity: 0.5 }} />
            {values.wall.name === "Drvo" && (
              <div className="check-icon">
                <CheckIcon />
              </div>
            )}
          </div>

          <div
            className="color-cont"
            onClick={() => {
              onChange(
                {
                  name: "Drvo 2",
                  texture: "Rough Wood",
                },
                "wall"
              );
            }}
          >
            <img className="color-image" src={wood2} style={{ opacity: 0.5 }} />
            {values.wall.name === "Drvo 2" && (
              <div className="check-icon">
                <CheckIcon />
              </div>
            )}
          </div>

          <div
            className="color-cont"
            onClick={() => {
              onChange(
                {
                  name: "Drvo 4",
                  texture: "Rough Wood.002",
                },
                "wall"
              );
            }}
          >
            <img
              className="color-image"
              src={wood4}
              style={{ opacity: 0.85 }}
            />
            {values.wall.name === "Drvo 4" && (
              <div className="check-icon">
                <CheckIcon />
              </div>
            )}
          </div>
          <div
            className="color-cont"
            onClick={() => {
              onChange(
                {
                  name: "Drvo 3",
                  texture: "Wood.001",
                },
                "wall"
              );
            }}
          >
            <img className="color-image" src={wood1} style={{ opacity: 0.5 }} />
            {values.wall.name === "Drvo 3" && (
              <div className="check-icon">
                <CheckIcon />
              </div>
            )}
          </div>
          <div
            className="color-cont"
            onClick={() => {
              onChange(
                {
                  name: "Kamen",
                  texture: "Stone Bricks",
                },
                "wall"
              );
            }}
          >
            <img className="color-image" src={stone} style={{ opacity: 0.5 }} />
            {values.wall.name === "Kamen" && (
              <div className="check-icon">
                <CheckIcon />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* APLIKACIJE */}

      {/* <div className="form-main__row">
        <Text variant="info">Aplikacija: </Text>
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
            <img
              className="application-image"
              style={{ backgroundColor: "blue" }}
            />
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
            <img
              className="application-image"
              style={{ backgroundColor: "yellow" }}
            />
            {values.application === "Application 2" && (
              <div className="check-icon">
                <CheckIcon />
              </div>
            )}
          </div>
        </div>
      </div> */}
      {/* APLIKACIJE */}
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
              <td className="cell primary">Tip zida</td>
              <td className="cell">{values.wall.name}</td>
            </tr>
            {/* APLIKACIJE */}
            {/* <tr className="row">
              <td className="cell primary">Aplikacija</td>
              <td className="cell">{values.application}</td>
            </tr> */}

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
          Prikazana cena je bez uračunatog PDV-a, a trošak montaže je
          informativnog karaktera, bez uračunatih transportnih i terenskih
          troškova. Za instalaciju Savadeck ograde obavezno je pripremiti
          betonsku osnovu (parapet) širine 20 cm.
        </Text>
      </div>

      <div className="info-wrapper">
        <Text variant="info">
          Za specifične zahteve izvan standardnih dimenzija, molimo pošaljite
          upit na info@savadeck.com. Konfigurator je informativnog karaktera.
        </Text>
      </div>
    </div>
  );
};

export default Form;

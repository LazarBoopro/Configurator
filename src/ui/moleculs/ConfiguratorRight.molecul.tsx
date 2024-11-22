import { useValues } from "../../context/FormValuesContext";
import { Button } from "../components/atoms/Button.atom";
import Form from "../components/containers/Form.container";

export default function ConfiguratorRight({
  setPage,
}: {
  setPage: CallableFunction;
}) {
  const { values } = useValues();

  return (
    <article className="configurator__right">
      <Form />
      <div className="submit-buttons">
        <Button
          variant="primary"
          onClick={() => {
            setPage(1);
          }}
          disabled={values.length < 0.9}
        >
          Obračun
        </Button>
        <Button disabled variant="outline" onClick={() => {}}>
          Zakažite izlazak na teren
        </Button>
      </div>
    </article>
  );
}

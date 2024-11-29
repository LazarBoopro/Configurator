import { useValues } from "../../context/FormValuesContext";
import { Button } from "../components/atoms/Button.atom";
import Contact from "../components/atoms/Contact.atom";
import Form from "../components/containers/Form.container";

export default function ConfiguratorRight({ setPage }: { setPage: CallableFunction }) {
    const { values } = useValues();

    return (
        <article className="configurator__right">
            <Form />
            <div className="form-actions">
                <Contact />
                <Button
                    variant="primary"
                    onClick={() => {
                        setPage(1);
                    }}
                    disabled={values.length < 0.9}
                >
                    Obračun
                </Button>
            </div>
        </article>
    );
}

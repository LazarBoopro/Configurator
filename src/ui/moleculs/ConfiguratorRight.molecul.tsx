import { useValues } from "../../context/FormValuesContext";
import { Button } from "../components/atoms/Button.atom";
import Form from "../components/containers/Form.container";

import email from "../../assets/email.svg";
import tel from "../../assets/tel.svg";

export default function ConfiguratorRight({ setPage }: { setPage: CallableFunction }) {
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
                <div className="schedule">
                    Zakažite izlazak na teren
                    <div style={{ display: "flex" }}>
                        <a
                            href="mailto:info@deking.com"
                            // className="button outline mailto"
                        >
                            <img src={email} alt="mail" />
                        </a>
                        <a
                            href="tel:+38162209207"
                            // className="button outline tel"
                        >
                            <img src={tel} alt="tel" />
                            {/* Zakažite izlazak na teren poziv */}
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

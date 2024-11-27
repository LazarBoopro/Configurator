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
            <div
                className="submit-buttons"
                style={{
                    alignContent: "flex-start",
                }}
            >
                <div
                    className="schedule"
                    style={{
                        display: "flex",
                        // justifyContent: "center",
                        alignItems: "start",
                        // alignContent: "flex-start!important",
                        gap: ".5rem",
                        width: "100%",
                    }}
                >
                    <p
                        style={{
                            fontWeight: "800",
                            textAlign: "left",
                            justifyContent: "space-between",
                            fontSize: "clamp(1.125rem, 3vw, 1.2rem)",
                            marginRight: "auto",
                        }}
                    >
                        Zakažite izlazak na teren
                    </p>
                    <div style={{ display: "flex", justifyContent: "flex-start" }}>
                        <a
                            style={{
                                padding: ".5rem 1rem",
                                display: "flex",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: ".5rem",
                            }}
                            href="mailto:info@deking.com"
                            // className="button outline mailto"
                        >
                            <img style={{ width: "1.25rem" }} src={email} alt="mail" />
                            <p>Posalji email</p>
                        </a>
                        <a
                            href="tel:+38162209207"
                            style={{
                                padding: ".5rem 1rem",
                                display: "flex",
                                alignContent: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: ".5rem",
                            }}
                            // className="button outline tel"
                        >
                            <img style={{ width: "1.25rem" }} src={tel} alt="tel" />
                            <p>Pozovi nas</p>
                            {/* Zakažite izlazak na teren poziv */}
                        </a>
                    </div>
                </div>
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

import { useValues } from "../../context/FormValuesContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "../components/atoms/Button.atom";
import Statement from "../components/containers/Statement.container";
import StatementPDF from "../components/containers/StatementPdf.container";

import email from "../../assets/email.svg";
import tel from "../../assets/tel.svg";

import "../styles/statement.scss";

export default function Table({ setPage }: { setPage: CallableFunction }) {
    const { total, values } = useValues();

    return (
        <div className="statement">
            {/* <PDFViewer className="pdf_viewer">
                <StatementPDF total={total} values={values} />
            </PDFViewer> */}

            <Statement />
            <div className="schedule">
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

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                    width: "100%",
                    marginTop: "1rem",
                    alignItems: "center",
                }}
            >
                <Button
                    variant="secondary"
                    onClick={() => {
                        setPage(0);
                    }}
                >
                    Nazad
                </Button>

                <div>
                    <PDFDownloadLink
                        document={<StatementPDF total={total} values={values} />}
                        fileName="Deking Zona Obračun.pdf"
                        className="pdf_download-button"
                    >
                        Preuzmi PDF
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    );
}

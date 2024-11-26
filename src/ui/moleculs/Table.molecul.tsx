import { useValues } from "../../context/FormValuesContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "../components/atoms/Button.atom";
import Statement from "../components/containers/Statement.container";
import StatementPDF from "../components/containers/StatementPdf.container";

import "../styles/statement.scss";

export default function Table({ setPage }: { setPage: CallableFunction }) {
    const { total, values } = useValues();

    return (
        <div className="statement">
            {/* <PDFViewer className="pdf_viewer">
                <StatementPDF total={total} values={values} />
            </PDFViewer> */}

            <Statement />
            <div className="submit-buttons">
                <Button
                    variant="secondary"
                    onClick={() => {
                        setPage(0);
                    }}
                >
                    Nazad
                </Button>

                <div>
                    <Button variant="outline" onClick={() => {}}>
                        Zakažite izlazak na teren
                    </Button>
                    <PDFDownloadLink
                        document={<StatementPDF total={total} values={values} />}
                        fileName="Decking Zona Obračun.pdf"
                        className="pdf_download-button"
                    >
                        Preuzmi PDF
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    );
}

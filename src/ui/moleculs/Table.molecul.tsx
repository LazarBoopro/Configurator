import { useValues } from "../../context/FormValuesContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "../components/atoms/Button.atom";
import Statement from "../components/containers/Statement.container";
import StatementPDF from "../components/containers/StatementPdf.container";
import Contact from "../components/atoms/Contact.atom";

import "../styles/statement.scss";

export default function Table({ setPage }: { setPage: CallableFunction }) {
    const { total, values } = useValues();

    return (
        <div className="statement">
            {/* <PDFViewer className="pdf_viewer">
                <StatementPDF total={total} values={values} />
            </PDFViewer> */}

            <Statement />
            <Contact />
            <div className="statement-actions">
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

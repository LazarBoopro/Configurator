import { useValues } from "../../context/FormValuesContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "../components/atoms/Button.atom";
import Statement from "../components/containers/Statement.container";
import StatementPDF from "../components/containers/StatementPdf.container";

import "../styles/statement.scss";

export default function Table({ setPage }: { setPage: CallableFunction }) {
    const { total } = useValues();

    return (
        <div className="statement">
            {/* <PDFViewer className="pdf_viewer">
                <StatementPDF total={total} />
            </PDFViewer> */}

            <Statement />
            <div className="submit-buttons">
                <Button
                    variant="primary"
                    onClick={() => {
                        setPage(0);
                    }}
                >
                    Nazad
                </Button>

                <div>
                    <Button variant="secondary" onClick={() => {}}>
                        Zakažite izlazak na teren
                    </Button>
                    <PDFDownloadLink
                        document={<StatementPDF total={total} />}
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

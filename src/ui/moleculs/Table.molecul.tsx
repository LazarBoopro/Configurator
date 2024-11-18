import { Button } from "../components/atoms/Button.atom";
import Statement from "../components/containers/Statement.container";

import "../styles/table.molecul.scss";

export default function Table({ setPage }: { setPage: CallableFunction }) {
  return (
    <div className="statement">
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
        <Button variant="secondary" onClick={() => {}}>
          Zakazite izlazak na teren
        </Button>
      </div>
    </div>
  );
}

import { useState } from "react";
import { ValuesProvider } from "./context/FormValuesContext";
import { Button } from "./ui/components/atoms/Button.atom";
import Form from "./ui/components/containers/Form.container";
import AppCanvas from "./ui/components/containers/AppCanvas.container";
import "./ui/styles/global.scss";

import Statement from "./ui/components/containers/Statement.container";

function App() {
  const [page, setPage] = useState(0);
  return (
    <main>
      <ValuesProvider>
        {page === 0 && (
          <div className="configurator">
            <article className="configurator__left">
              <AppCanvas />
            </article>
            <article className="configurator__right">
              <Form />
              <div className="submit-buttons">
                <Button
                  variant="primary"
                  onClick={() => {
                    setPage(1);
                  }}
                >
                  Obracun
                </Button>
                <Button variant="secondary" onClick={() => {}}>
                  Zakazite izlazak na teren
                </Button>
              </div>
            </article>
          </div>
        )}
        {page === 1 && (
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
        )}
      </ValuesProvider>
    </main>
  );
}

export default App;

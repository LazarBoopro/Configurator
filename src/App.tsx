import { useState } from "react";
import { useValues } from "./context/FormValuesContext";
import { Button } from "./ui/components/atoms/Button.atom";
import Form from "./ui/components/containers/Form.container";
import AppCanvas from "./ui/components/containers/AppCanvas.container";
import "./ui/styles/global.scss";

import Statement from "./ui/components/containers/Statement.container";

function App() {
    const [page, setPage] = useState(0);
    const { values } = useValues();

    return (
        <main>
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
                                disabled={values.length < 0.9}
                            >
                                Obračun
                            </Button>
                            <Button variant="outline" onClick={() => {}}>
                                Zakažite izlazak na teren
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
                            Zakažite izlazak na teren
                        </Button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default App;

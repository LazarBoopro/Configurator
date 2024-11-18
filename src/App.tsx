import { useState } from "react";
import { ValuesProvider } from "./context/FormValuesContext";

import Configurator from "./ui/moleculs/Configurator.molecul";
import Table from "./ui/moleculs/Table.molecul";

import "./ui/styles/global.scss";

function App() {
  const [page, setPage] = useState(0);
  return (
    <main>
      <ValuesProvider>
        {page === 0 ? (
          <Configurator setPage={setPage} />
        ) : (
          <Table setPage={setPage} />
        )}
      </ValuesProvider>
    </main>
  );
}

export default App;

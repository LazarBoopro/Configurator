import { useState } from "react";
import { ValuesProvider } from "./context/FormValuesContext";

import Configurator from "./ui/moleculs/Configurator.molecul";
import Table from "./ui/moleculs/Table.molecul";

import "./ui/styles/global.scss";

function App() {
  const [page, setPage] = useState(0);

  console.log(page);

  return (
    <ValuesProvider>
      <main>
        {page === 0 ? (
          <Configurator setPage={setPage} />
        ) : (
          <Table setPage={setPage} />
        )}
      </main>
    </ValuesProvider>
  );
}

export default App;

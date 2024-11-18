import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ValuesProvider } from "./context/FormValuesContext";

import "./ui/styles/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ValuesProvider>
            <App />
        </ValuesProvider>
    </React.StrictMode>
);

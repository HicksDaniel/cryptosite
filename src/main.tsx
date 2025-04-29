import { StrictMode } from "react";
import { PrimeReactProvider } from "primereact/api";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./components/common/themeprovider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </PrimeReactProvider>
  </StrictMode>
);

import { createRoot } from "react-dom/client";
import App from "./sources/App";
import "./index.css";
import { FiltersProvider } from "./sources/context/filters";

createRoot(document.getElementById("app")).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);

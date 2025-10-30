import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { StoreContext } from "./context/StoreContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContext.Provider>
      <StrictMode>
        <App />
      </StrictMode>
    </StoreContext.Provider>
  </BrowserRouter>
);

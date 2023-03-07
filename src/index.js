import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { ThemeProvider } from "./Context/ThemeProvider";
import { ContextProvider } from "./Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ContextProvider>
          <AppRouter />
        </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

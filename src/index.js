import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import {BrowserRouter} from "react-router-dom";
import "./index.scss";
import ProviderContext from "./Context/Context";
import ThemeProvider from "./Context/ThemeProvider";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ProviderContext>
                <ThemeProvider>
                    <AppRouter/>
                </ThemeProvider>
            </ProviderContext>
        </BrowserRouter>
    </React.StrictMode>
);

import { BrowserRouter,Route,Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={App}/>
    </Routes>
    </BrowserRouter>
);